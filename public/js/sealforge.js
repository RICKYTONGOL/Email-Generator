// import { toDataURL } from "./sf-image-encode.js";
// import { socialMedia } from "./sf-social.js";

document.addEventListener("DOMContentLoaded", function () {
  let sigImage = document.getElementById("sf-image");

  // Base64 encode the default image
  toDataURL(sigImage.src).then((dataurl) => {
    sigImage.src = dataurl.src;
    sigImage.width = dataurl.width;
    sigImage.height = dataurl.height;
  });

  // Initialize event listeners
  SF_initializeEventListeners();
});

function SF_initializeEventListeners() {
  const inputs = document.querySelectorAll("select, input");
  inputs.forEach((input) => {
    input.addEventListener("input", sf_inputhandler);
  });

  // Add event listeners for address fields
  document
    .querySelector(".sf-reset")
    .addEventListener("click", SF_resetFormHandler);
}

function sf_inputhandler(e) {
  const eventContext = {
    e,
    value: e.target.value,
    idPropertyString: e.target.id,
    matchingPreviewElement: document.querySelector(`#${e.target.id}Box`),
  };

  // Format phone number if the input is from a phone number field
  if (e.target.classList.contains("sf-phone")) {
    const formattedNumber = formatPhoneNumber(e.target.value);
    e.target.value = formattedNumber; // Update the input field with the formatted number
    eventContext.value = formattedNumber; // Update the preview context with the formatted number
  }

  switch (true) {
    case e.target.classList.contains("sf-concat"):
      SF_handleConcatenatablesChange(eventContext);
      break;

    case e.target.id === "sf-address2":
      SF_handleTextWithLeftPipeChange(eventContext);
      break;

    case e.target.id === "sf-city":
      console.log("City field triggered");
      SF_handleAddressChange();
      break;

    case e.target.id === "sf-state":
      console.log("State field triggered");
      SF_handleAddressChange();
      break;

    case e.target.id === "sf-postalCode":
      console.log("Postal Code field triggered");
      SF_handleAddressChange();
      break;

    case e.target.classList.contains("sf-sm-input"):
      SF_handleCheckboxChange(eventContext);
      break;

    case e.target.id === "sf-logo":
      SF_handleLogoChange(eventContext);
      break;

    default:
      SF_handleSimpleTextChange(eventContext);
  }
}
1;

// Function to format phone numbers
function formatPhoneNumber(number) {
  console.log("formatPhoneNumber Launched " + number);
  // Remove all non-numeric characters except '+' (for international codes)
  let cleaned = ("" + number).replace(/[^+\d]/g, "");

  // Handle international code
  if (cleaned.length > 10 && cleaned.startsWith("+")) {
    // Extract international code and format the rest
    const internationalCode = cleaned.substring(0, cleaned.length - 10);
    const localNumber = cleaned.substring(cleaned.length - 10);
    console.log("International Phone input detected. Formatting...");
    return `${internationalCode} ${formatLocalPhoneNumber(localNumber)}`;
  } else {
    // Format the local number
    return formatLocalPhoneNumber(cleaned);
  }
}

function formatLocalPhoneNumber(number) {
  // Format local number as XXX.XXX.XXXX

  if (number.length === 10) {
    return number.replace(/(\d{3})(\d{3})(\d{4})/, "$1.$2.$3");
    console.log("Phone input detected. Formatting..." + number);
  } else {
    // Return the cleaned number if it doesn't fit expected pattern
    return number;
  }
}

function SF_handleConcatenatablesChange(context) {
  const outputContainer = document.getElementById("sf-concatBox");
  const concatenatableInputs = document.querySelectorAll(".sf-concat");
  let countOfConcatenatablesWithContent = 0;
  let growingMarkupString = "";

  concatenatableInputs.forEach((input) => {
    if (input.value) {
      countOfConcatenatablesWithContent++;
      growingMarkupString += SF_generateHtmlSegment(
        input,
        countOfConcatenatablesWithContent
      );
    }
  });

  outputContainer.innerHTML = growingMarkupString;
}

function SF_handleTextWithLeftPipeChange(context) {
  if (context.value === "") {
    context.matchingPreviewElement.innerHTML = "";
  } else {
    context.matchingPreviewElement.innerHTML = `<span>| ${context.value}</span>`;
  }
}

function SF_handleTextWithLeftMarginChange(context) {
  if (context.value === "") {
    context.matchingPreviewElement.innerHTML = "";
  } else {
    context.matchingPreviewElement.innerHTML = `<span>${context.value}</span>`;
  }
}

function SF_handleSimpleTextChange(context) {
  context.matchingPreviewElement.innerHTML = context.value;
}

function SF_handleCheckboxChange(context) {
  const pngPaths = SF_getSocialPngs();
  const socialLinks = SF_getSocialLinks();

  // Assuming socialMedia function is imported and works similarly to your original code
  socialMedia(".sf-sm-input", ".sf-sm-output", pngPaths, socialLinks);
}

function SF_handleLogoChange(context) {
  const path = "./images/";
  const imageFileNames = ["MainLogoSig.png", "MainLogoSig1.png"];
  const selectedOptionIndex = context.e.target.selectedIndex;

  toDataURL(path + imageFileNames[selectedOptionIndex]).then((dataurl) => {
    const sigImage = document.getElementById("sf-image");
    sigImage.src = dataurl.src;
    sigImage.width = dataurl.width;
    sigImage.height = dataurl.height;
  });
}

function SF_generateHtmlSegment(input, countOfConcatenatablesWithContent) {
  console.log("input.id", input.id);

  const website1Input = document.querySelector("#sf-website1");
  const website2Input = document.querySelector("#sf-website2");

  let separator;
  let label = getFirstLetterOfLabel(input.id).toUpperCase() + ":";
  let ending;

  // For second website on same line: separate with a comma
  if (
    input.id === "website2" &&
    countOfConcatenatablesWithContent % 2 === 0 &&
    website1Input.value !== "" &&
    website2Input.value !== ""
  ) {
    label = ``;
    separator = `<span>, </span>`;
    ending = `<br/>`;
  }
  // Second item on a line: separate with pipe and add line break at end
  else if (countOfConcatenatablesWithContent % 2 === 0) {
    separator = `<span> | </span>`;
    ending = `<br/>`;
  }
  // First item on a line
  else {
    (separator = ``), (ending = ``);
  }

  /* Generate markup based on variables set above */
  return `${separator}<span>
      <span style='font-weight: bold'>${label} </span>
      <span>${input.value}</span>
    </span>${ending}`;
}

function getFirstLetterOfLabel(inputId) {
  const labelElement = document.querySelector(`label[for="${inputId}"]`);
  if (labelElement) {
    const labelText = labelElement.textContent || labelElement.innerText;
    return labelText.charAt(0);
  }
  return null; // Return null if no label found
}

// This function returns an object mapping checkbox IDs to the paths of social media PNG icons.
function SF_getSocialPngs() {
  return {
    "sf-facebook": "./images/facebook.png",
    "sf-twitter": "./images/x-twitter.png",
    "sf-linkedin": "./images/linkedin.png",
    "sf-instagram": "./images/instagram.png",
    "sf-youtube": "./images/youtube.png",
    // add more social media icons and paths as needed
  };
}

// This function returns an object mapping checkbox IDs to social media profile URLs.
function SF_getSocialLinks() {
  return {
    "sf-facebook": "https://www.facebook.com/LUBlueTigers",
    "sf-twitter": "https://twitter.com/LUBlueTigers",
    "sf-linkedin":
      "https://www.linkedin.com/school/lincoln-university-of-missouri/",
    "sf-instagram": "https://www.instagram.com/lubluetigers/",
    "sf-youtube": "https://www.youtube.com/channel/UCXqko_SMgFxzWMQ9_KgEdSg",
    // add more social media profiles and URLs as needed
  };
}

function SF_resetFormHandler(e) {
  console.log("reset form handler called!");
  const resettableFields = document.querySelectorAll(".sf-doReset");
  resettableFields.forEach((field) => {
    field.innerHTML = "";
  });
  const imageElement = document.getElementById("sf-image");
  imageElement.src = "./images/MainLogoSig.png";
  // Similar to your original `resetFormHandler` function
}

// Function to handle address input changes
function SF_handleAddressChange() {
  const city = document.getElementById("sf-city").value;
  const state = document.getElementById("sf-state").value;
  const postalCode = document.getElementById("sf-postalCode").value;

  // Log the current values of City, State, and Postal Code
  console.log(`City: ${city}, State: ${state}, Postal Code: ${postalCode}`);

  const cityBox = document.getElementById("sf-cityBox");
  const stateBox = document.getElementById("sf-stateBox");
  const postalCodeBox = document.getElementById("sf-postalCodeBox");

  if (city && state) {
    cityBox.innerHTML = `<span>${city}, </span>`;
    stateBox.innerHTML = `<span>${state}</span>`;
  } else {
    cityBox.innerHTML = `<span>${city}</span>`;
    stateBox.innerHTML = `<span>${state}</span>`;
  }

  postalCodeBox.innerHTML = `<span>${postalCode}</span>`;
}
