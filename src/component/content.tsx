"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export interface socialInfo {
  label: string;
  value: boolean;
  src: string;
  link: string;
}

const Content = () => {
  let logoImgSrc = "/images/MainLogo.png";

  const [sfName, setsfName] = useState("");
  const [sfPronoun, setsfPronoun] = useState("");
  const [sfTitle, setsfTitle] = useState("");
  const [sfUnit, setsfUnit] = useState("");
  const [sfAdr1, setsfAdr1] = useState("");
  const [sfAdr2, setsfAdr2] = useState("");
  const [sfCity, setsfCity] = useState("");
  const [sfState, setsfState] = useState("");
  const [sfPostalCode, setsfPostalCode] = useState("");
  const [sfOfficePhone, setsfOfficePhone] = useState("");
  const [sfPhone, setsfPhone] = useState("");
  const [sfMobilePhone, setsfMobilePhone] = useState("");
  const [sfFaxNumber, setsfFaxNumber] = useState("");
  const [sfEmail, setsfemail] = useState("");
  const [sfWebSite1, setsfWebSite1] = useState("");
  const [sfWebSite2, setsfWebSite2] = useState("");
  const [formattedInfo, setFormattedInfo] = useState("");

  const [facebook, setFacebook] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const [youtube, setYoutube] = useState(false);
  const [linkedin, setLinkedin] = useState(false);

  const [checkedSocial, setCheckedSocial] = useState<socialInfo[]>([]);

  const handlePronounChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsfPronoun(e.target.value);
  };
  const handleStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsfState(e.target.value);
  };
  const reset = () => {
    console.log("23");
    setFormattedInfo("");
    setCheckedSocial([]);
  };
  const formatSocialInfo = () => {
    const socialFields = [
      {
        label: "facebook",
        value: facebook,
        src: "/images/facebook.png",
        link: "https://www.facebook.com",
      },
      {
        label: "instagram",
        value: instagram,
        src: "/images/instagram.png",
        link: "https://www.instagram.com",
      },
      {
        label: "twitter",
        value: twitter,
        src: "/images/x-twitter.png",
        link: "https://twitter.com",
      },
      {
        label: "youtube",
        value: youtube,
        src: "/images/youtube.png",
        link: "https://www.youtube.com",
      },
      {
        label: "linkedin",
        value: linkedin,
        src: "/images/linkedin.png",
        link: "https://www.linkedin.com",
      },
    ];

    // Filter out empty fields
    setCheckedSocial(socialFields.filter((field) => field.value !== false));
  };
  const formatContactInfo = () => {
    const contactFields = [
      { label: "O ", value: sfOfficePhone }, // O for Office Phone
      { label: "P ", value: sfPhone }, // P for Primary Phone
      { label: "M ", value: sfMobilePhone }, // M for Mobie
      { label: "F ", value: sfFaxNumber }, // F for Fax Number
      { label: "E ", value: sfEmail }, // E for Email
      { label: "W ", value: sfWebSite1 }, // W for Fax Website1
      { label: "W ", value: sfWebSite2 }, // W for Website2
    ];

    // Filter out empty fields
    const filledFields = contactFields.filter((field) => field.value !== "");

    // Create pairs of two fields
    const lines = [];
    for (let i = 0; i < filledFields.length; i += 2) {
      const firstField = filledFields[i];
      const secondField = filledFields[i + 1];

      // If both fields exist, join them with a separator
      if (firstField && secondField) {
        lines.push(
          `<strong>${firstField.label}</strong>: ${firstField.value} | <strong>${secondField.label}</strong>: ${secondField.value}`
        );
      }
      // If only one field exists, push it without a separator
      else if (firstField) {
        lines.push(`<strong>${firstField.label}</strong>: ${firstField.value}`);
      }
    }

    // Join lines with line breaks
    return lines.join("<br />");
  };
  useEffect(() => {
    setFormattedInfo(formatContactInfo());
    formatSocialInfo();
    console.log(checkedSocial);
  }, [
    facebook,
    instagram,
    twitter,
    linkedin,
    youtube,
    sfOfficePhone,
    sfPhone,
    sfMobilePhone,
    sfFaxNumber,
    sfEmail,
    sfWebSite1,
    sfWebSite2,
  ]); // Trigger on cha
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10" id="sf-content">
          {/* <!-- Two Columns --> */}

          <div className="row">
            <div className="col-12 col-md-6" id="sf-column-1">
              <form id="sf-form">
                <div className="row">
                  {/* <!-- Row 1: Name and Pronoun --> */}

                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="sf-name" className="SF-label">
                        Name
                      </label>

                      <input
                        type="text"
                        className="form-control SF-input"
                        name="sfName"
                        placeholder=""
                        value={sfName ?? ""}
                        onChange={(e) => {
                          setsfName(e.target.value);
                          const value = e.target.value;
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="sf-pronoun" className="SF-label">
                        Pronoun
                      </label>

                      <select
                        className="form-control SF-input"
                        id="sf-pronoun"
                        onChange={handlePronounChange}
                      >
                        <option>Select a pronoun</option>

                        <option>(he/him/his)</option>

                        <option>(she/her/hers)</option>

                        <option>(they/them/theirs)</option>

                        <option>(ze/hir/hirs)</option>

                        <option>(zie/hir/hirs)</option>

                        <option>(ey/em/eir)</option>

                        <option>(ze/zem/zyr)</option>

                        <option>(e/em/eir)</option>
                      </select>
                    </div>
                  </div>

                  {/* <!-- Row 2: Title and School/College/Unit --> */}

                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="sf-title" className="SF-label">
                        Title
                      </label>

                      <input
                        type="text"
                        className="form-control SF-input"
                        id="sf-title"
                        placeholder=""
                        value={sfTitle ?? ""}
                        onChange={(e) => {
                          setsfTitle(e.target.value);
                          const value = e.target.value;
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="sf-school" className="SF-label">
                        School/College/Unit
                      </label>

                      <input
                        type="text"
                        className="form-control SF-input"
                        id="sf-unit"
                        placeholder=""
                        value={sfUnit ?? ""}
                        onChange={(e) => {
                          setsfUnit(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  {/* <!-- Row 3: Address 1 and Address 2 --> */}

                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="sf-address1" className="SF-label">
                        Address 1
                      </label>

                      <input
                        type="text"
                        className="form-control SF-input"
                        id="sf-address1"
                        placeholder=""
                        value={sfAdr1 ?? ""}
                        onChange={(e) => {
                          setsfAdr1(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="sf-address2" className="SF-label">
                        Address 2
                      </label>

                      <input
                        type="text"
                        className="form-control SF-input sf-addextend"
                        id="sf-address2"
                        placeholder=""
                        value={sfAdr2 ?? ""}
                        onChange={(e) => {
                          setsfAdr2(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  {/* <!-- Row 4: City, State, and Postal Code (Spanning both columns) --> */}

                  <div className="col-12">
                    <div className="form-group row">
                      <div className="col-4">
                        <label htmlFor="sf-city" className="SF-label">
                          City
                        </label>

                        <input
                          type="text"
                          className="form-control SF-input"
                          id="sf-city"
                          placeholder=""
                          value={sfCity ?? ""}
                          onChange={(e) => {
                            setsfCity(e.target.value);
                          }}
                        />
                      </div>

                      <div className="col-4">
                        <label htmlFor="sf-state" className="SF-label">
                          State
                        </label>

                        <select
                          className="form-control SF-input"
                          id="sf-state"
                          onChange={handleStateChange}
                        >
                          <option>Alabama</option>

                          <option>Alaska</option>

                          <option>Arizona</option>

                          <option>Arkansas</option>

                          <option>California</option>

                          <option>Colorado</option>

                          <option>Connecticut</option>

                          <option>Delaware</option>

                          <option>Florida</option>

                          <option>Georgia</option>

                          <option>Hawaii</option>

                          <option>Idaho</option>

                          <option>Illinois</option>

                          <option>Indiana</option>

                          <option>Iowa</option>

                          <option>Kansas</option>

                          <option>Kentucky</option>

                          <option>Louisiana</option>

                          <option>Maine</option>

                          <option>Maryland</option>

                          <option>Massachusetts</option>

                          <option>Michigan</option>

                          <option>Minnesota</option>

                          <option>Mississippi</option>

                          <option>Missouri</option>

                          <option>Montana</option>

                          <option>Nebraska</option>

                          <option>Nevada</option>

                          <option>New Hampshire</option>

                          <option>New Jersey</option>

                          <option>New Mexico</option>

                          <option>New York</option>

                          <option>North Carolina</option>

                          <option>North Dakota</option>

                          <option>Ohio</option>

                          <option>Oklahoma</option>

                          <option>Oregon</option>

                          <option>Pennsylvania</option>

                          <option>Rhode Island</option>

                          <option>South Carolina</option>

                          <option>South Dakota</option>

                          <option>Tennessee</option>

                          <option>Texas</option>

                          <option>Utah</option>

                          <option>Vermont</option>

                          <option>Virginia</option>

                          <option>Washington</option>

                          <option>West Virginia</option>

                          <option>Wisconsin</option>

                          <option>Wyoming</option>
                        </select>
                      </div>

                      <div className="col-4">
                        <label htmlFor="sf-postalCode" className="SF-label">
                          Postal Code
                        </label>

                        <input
                          type="text"
                          className="form-control SF-input"
                          id="sf-postalCode"
                          placeholder=""
                          value={sfPostalCode ?? ""}
                          onChange={(e) => {
                            setsfPostalCode(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* <!-- Row 5: Office Phone and Phone --> */}

                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="sf-officePhone" className="SF-label">
                        Office Phone
                      </label>

                      <input
                        type="text"
                        className="form-control SF-input sf-concat"
                        id="sf-officePhone"
                        placeholder=""
                        value={sfOfficePhone ?? ""}
                        onChange={(e) => {
                          setsfOfficePhone(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="sf-phone" className="SF-label">
                        Phone
                      </label>

                      <input
                        type="text"
                        className="form-control SF-input sf-concat sf-phone"
                        id="sf-phone"
                        placeholder=""
                        value={sfPhone ?? ""}
                        onChange={(e) => {
                          setsfPhone(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  {/* <!-- Row 6: Mobile Phone and Fax Number --> */}

                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="sf-mobilePhone" className="SF-label">
                        Mobile Phone
                      </label>

                      <input
                        type="text"
                        className="form-control SF-input sf-concat SF-phone"
                        id="sf-mobilePhone"
                        placeholder=""
                        value={sfMobilePhone ?? ""}
                        onChange={(e) => {
                          setsfMobilePhone(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="sf-faxNumber" className="SF-label">
                        Fax Number
                      </label>

                      <input
                        type="text"
                        className="form-control SF-input sf-concat SF-phone"
                        id="sf-faxNumber"
                        placeholder=""
                        value={sfFaxNumber ?? ""}
                        onChange={(e) => {
                          setsfFaxNumber(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  {/* <!-- Row 7: Email and Image --> */}

                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="sf-email" className="SF-label">
                        Email
                      </label>

                      <input
                        type="text"
                        className="form-control SF-input sf-concat"
                        id="sf-email"
                        placeholder=""
                        value={sfEmail ?? ""}
                        onChange={(e) => {
                          setsfemail(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="sf-logo" className="SF-label">
                        Logo for Signature
                      </label>

                      <select className="form-control SF-input" id="sf-logo">
                        <option>Primary Logo</option>
                        <option>Academic Logo</option>
                      </select>
                    </div>
                  </div>

                  {/* <!-- Row 7: Website 1 and Website 2 --> */}

                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="sf-website1" className="SF-label">
                        Website 1
                      </label>

                      <input
                        type="text"
                        className="form-control SF-input sf-concat"
                        id="sf-website1"
                        placeholder=""
                        value={sfWebSite1 ?? ""}
                        onChange={(e) => {
                          setsfWebSite1(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="sf-website2" className="SF-label">
                        Website 2
                      </label>

                      <input
                        type="text"
                        className="form-control SF-input sf-concat"
                        id="sf-website2"
                        placeholder=""
                        value={sfWebSite2 ?? ""}
                        onChange={(e) => {
                          setsfWebSite2(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  {/* <!-- Row 8: Social Media Links (Spanning both columns) --> */}

                  <div className="col-12">
                    <div className="form-group">
                      <label className="SF-label">
                        Include Social Media Links?
                      </label>

                      <div className="form-check SF-checkbox">
                        <input
                          type="checkbox"
                          className="sf-sm-input form-check-input"
                          id="sf-facebook"
                          checked={facebook}
                          onChange={(e) => {
                            setFacebook(e.target.checked);
                          }}
                        />

                        <label
                          htmlFor="sf-facebook"
                          className="form-check-label"
                        >
                          Facebook
                        </label>
                      </div>

                      <div className="form-check SF-checkbox">
                        <input
                          type="checkbox"
                          className="sf-sm-input form-check-input"
                          id="sf-instagram"
                          checked={instagram}
                          onChange={(e) => {
                            setInstagram(e.target.checked);
                          }}
                        />

                        <label
                          htmlFor="sf-instagram"
                          className="form-check-label"
                        >
                          Instagram
                        </label>
                      </div>

                      <div className="form-check SF-checkbox">
                        <input
                          type="checkbox"
                          className="sf-sm-input form-check-input"
                          id="sf-twitter"
                          checked={twitter}
                          onChange={(e) => {
                            setTwitter(e.target.checked);
                          }}
                        />

                        <label
                          htmlFor="sf-twitter"
                          className="form-check-label"
                        >
                          Twitter
                        </label>
                      </div>

                      <div className="form-check SF-checkbox">
                        <input
                          type="checkbox"
                          className="sf-sm-input form-check-input"
                          id="sf-youtube"
                          checked={youtube}
                          onChange={(e) => {
                            setYoutube(e.target.checked);
                          }}
                        />

                        <label
                          htmlFor="sf-youtube"
                          className="form-check-label"
                        >
                          YouTube
                        </label>
                      </div>

                      <div className="form-check SF-checkbox">
                        <input
                          type="checkbox"
                          className="sf-sm-input form-check-input"
                          id="sf-linkedin"
                          checked={linkedin}
                          onChange={(e) => {
                            setLinkedin(e.target.checked);
                          }}
                        />

                        <label
                          htmlFor="sf-linkedin"
                          className="form-check-label"
                        >
                          LinkedIn
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-12 col-md-6" id="sf-column-2">
              <h2>Preview</h2>
              <p>
                <em>
                  Click in the preview box below and copy the contents. Then
                  paste and save as an email signature in your email client.
                </em>
              </p>
              <p>
                <em>
                  (For PC use <i className="fab fa-windows"></i> + C, For Mac
                  use ⌘ + C)
                </em>
              </p>

              <table
                id="SF-copyTable"
                className="SF-mainTable"
                style={{ backgroundColor: "#ffffff", color: "#111111" }}
              >
                <tbody
                  style={{
                    backgroundColor: "#ffffff",
                    WebkitUserSelect: "all",
                    // msUserSelect: "all",
                    userSelect: "all",
                  }}
                >
                  <tr
                    style={{ backgroundColor: "#ffffff", fontFamily: "Arial" }}
                  >
                    <td style={{ backgroundColor: "#ffffff" }}>
                      <div
                        className="SF-outputArea"
                        style={{ fontSize: "14px", padding: "20px" }}
                        id="SF-outputDiv"
                      >
                        <div style={{ background: "#ffffff" }}>
                          <b className="sf-doReset sf-name" id="sf-nameBox">
                            {sfName}
                          </b>

                          <span>&nbsp;</span>

                          <i className="sf-doReset" id="sf-pronounBox">
                            {sfPronoun}
                          </i>
                        </div>

                        <div
                          className="sf-doReset"
                          style={{ fontStyle: "italic" }}
                          id="sf-titleBox"
                        >
                          {sfTitle}
                        </div>

                        <table cellPadding="5" aria-hidden="true">
                          <tbody>
                            <tr>
                              <td>&nbsp;</td>
                            </tr>
                          </tbody>
                        </table>

                        <div
                          className="SF-unitContainer sf-doReset"
                          id="sf-unitBox"
                        >
                          {sfUnit}
                        </div>

                        <div>
                          <span className="sf-doReset" id="sf-address1Box">
                            {sfAdr1}
                          </span>
                          {sfAdr2 && (
                            <span className="sf-doReset" id="sf-address2Box">
                              {sfAdr1 && <span> | </span>}
                              {sfAdr2}&nbsp;
                            </span>
                          )}
                          {sfCity && (
                            <span className="sf-doReset" id="sf-cityBox">
                              {sfCity},&nbsp;
                            </span>
                          )}
                          <span className="sf-doReset" id="sf-stateBox">
                            {sfState}
                          </span>
                          <span className="sf-doReset" id="sf-postalCodeBox">
                            &nbsp;{sfPostalCode}
                          </span>
                        </div>

                        <div className="sf-doReset" id="sf-concatBox">
                          {" "}
                          <p
                            dangerouslySetInnerHTML={{ __html: formattedInfo }}
                          ></p>
                        </div>

                        <table cellPadding="7" aria-hidden="true">
                          <tbody>
                            <tr>
                              <td>&nbsp;</td>
                            </tr>
                          </tbody>
                        </table>

                        <div className="SF-logoRow">
                          <Image
                            width={300}
                            height={100}
                            className="logo-img"
                            src="data:image/png;base64,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"
                            alt="Company Logo"
                            priority
                          />
                        </div>

                        <div className="sf-sm-output sf-doReset d-flex">
                          {checkedSocial.map((item) => (
                            <div key={item.label}>
                              <a href={item.link}>
                                <Image
                                  width={30}
                                  height={30}
                                  src={item.src}
                                  alt="social"
                                  style={{ margin: "10px" }}
                                />
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="sf-info-area">
                <p>
                  <em>
                    <strong>Notice</strong>: Due to compatibility issues, this
                    tool has only proven reliable when using Chrome or FireFox
                    and signatures are copied into Outlook&apos;s signature
                    editor.
                  </em>
                </p>
                <button
                  className="sf-reset"
                  type="reset"
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
