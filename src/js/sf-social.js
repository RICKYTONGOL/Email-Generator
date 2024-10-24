import {toDataURL} from "./sf-image-encode.js";



export const socialMedia = (checkboxSelector, smContainerSelector, pngPaths, socialLinks) => {

    const socialOutputContainer = document.querySelector(smContainerSelector);

    const socialCheckboxes = document.querySelectorAll(checkboxSelector);



    // Clear existing children from the output container

    socialOutputContainer.innerHTML = '';



    // Create a space element for spacing between social media icons

    const space = document.createElement('span');

    space.innerHTML = '&nbsp;'.repeat(3);



    socialCheckboxes.forEach(checkbox => {

        if (checkbox.checked) {

            toDataURL(pngPaths[checkbox.id])

                .then(dataurl => {

                    const smAnchor = document.createElement('a');

                    smAnchor.href = socialLinks[checkbox.id];

                    smAnchor.target = '_blank';

                    smAnchor.style.textDecoration = 'none';

                    smAnchor.style.cursor = 'pointer';

                    smAnchor.style.color = '#ffffff';



                    const smImage = document.createElement('img');

                    smImage.src = dataurl.src;

                    smImage.width = dataurl.width;

                    smImage.height = dataurl.height;

                    smImage.alt = checkbox.id;



                    smAnchor.appendChild(smImage);

                    socialOutputContainer.appendChild(smAnchor);

                    socialOutputContainer.appendChild(space.cloneNode(true));

                })

                .catch(err => {

                    console.error(`Failed to load social media icon for ${checkbox.id}:`, err);

                });

        }

    });

};

