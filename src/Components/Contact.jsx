import React from "react";
import Captcha from "./Captcha";

function Contact() {
  return (
    <div id="contact" style={{ backgroundColor: "#bfdbfe", height: "700%",fontFamily:'sans-serif' }}>
      <form
        style={{
          justifyContent: "center",
          marginTop:'-50px',
          marginLeft: "360px",
          borderRadius: "20px",
        }}
      >
        <h2
          style={{
            marginLeft: "340px",
            fontSize: "35px",
            paddingTop: "30px",
            color: "#311B92",
            fontWeight: "bold",
          }}
        >
          Contact Us
        </h2>

        <div style={{ marginLeft: "400px", padding: "50px" }}>
          <p style={{ marginLeft: "-400px", fontSize: "22px" }}>
            We believe in working collaboratively to achieve large scale digital
            transformation
          </p>
          <p
            style={{
              marginLeft: "-180px",
              fontSize: "22px",
              paddingTop: "10px",
            }}
          >
            Let's start a conversation
          </p>
          <p
            style={{
              marginLeft: "-350px",
              paddingTop: "30px",
              paddingBottom: "30px",
              fontSize: "20px",
            }}
          >
            {" "}
            Note : That all fields marked with an asterisk (*) are required
          </p>

          <div style={{ padding: "10px" }}>
            <label
              style={{
                position: "absolute",
                marginLeft: "-360px",
                fontSize: "20px",
              }}
            >
              {" "}
              First Name
              <p
                style={{
                  display: "flex",
                  position: "absolute",
                  marginTop: "-30px",
                  marginLeft: "-8px",
                  color: "red",
                }}
              >
                *
              </p>{" "}
            </label>
            <input
              type="text"
              name="First Name"
              id="First Name"
              style={{
                border: "1px solid black",
                marginLeft: "-170px",
                width: "360px",
                borderRadius: "4px",
                height: "40px",
              }}
            />
          </div>
          <div style={{ padding: "10px" }}>
            <label
              style={{
                position: "absolute",
                marginLeft: "-360px",
                fontSize: "20px",
              }}
            >
              Last Name{" "}
              <p
                style={{
                  display: "flex",
                  position: "absolute",
                  marginTop: "-30px",
                  marginLeft: "-8px",
                  color: "red",
                }}
              >
                *
              </p>
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              style={{
                border: "1px solid black",
                marginLeft: "-170px",
                width: "360px",
                borderRadius: "4px",
                height: "40px",
              }}
            />
          </div>
          <div style={{ padding: "10px" }}>
            <label
              style={{
                position: "absolute",
                marginLeft: "-360px",
                fontSize: "20px",
              }}
            >
              Job Title{" "}
              <p
                style={{
                  display: "flex",
                  position: "absolute",
                  marginTop: "-30px",
                  marginLeft: "-8px",
                  color: "red",
                }}
              >
                *
              </p>
            </label>
            <input
              type="text"
              id="jontitle"
              name="jobtitle"
              style={{
                border: "1px solid black",
                marginLeft: "-170px",
                width: "360px",
                borderRadius: "4px",
                height: "40px",
              }}
            />
          </div>
          <div style={{ padding: "10px" }}>
            <label
              style={{
                position: "absolute",
                marginLeft: "-360px",
                fontSize: "20px",
              }}
            >
              Company Name{" "}
              <p
                style={{
                  display: "flex",
                  position: "absolute",
                  marginTop: "-30px",
                  marginLeft: "-8px",
                  color: "red",
                }}
              >
                *
              </p>
            </label>
            <input
              type="text"
              id="companyname"
              name="companyname"
              style={{
                border: "1px solid black",
                marginLeft: "-170px",
                width: "360px",
                borderRadius: "4px",
                height: "40px",
              }}
            />
          </div>
          <div style={{ padding: "10px" }}>
            <label
              style={{
                position: "absolute",
                marginLeft: "-360px",
                fontSize: "20px",
              }}
            >
              Email Address{" "}
              <p
                style={{
                  display: "flex",
                  position: "absolute",
                  marginTop: "-30px",
                  marginLeft: "-8px",
                  color: "red",
                }}
              >
                *
              </p>
            </label>
            <input
              type="text"
              id="Email Address"
              name="Email Address"
              style={{
                border: "1px solid black",
                marginLeft: "-170px",
                width: "360px",
                borderRadius: "4px",
                height: "40px",
              }}
            />
          </div>
          <div style={{ padding: "10px" }}>
            <label
              style={{
                position: "absolute",
                marginLeft: "-360px",
                fontSize: "20px",
              }}
            >
              Telephone{" "}
              <p
                style={{
                  display: "flex",
                  position: "absolute",
                  marginTop: "-30px",
                  marginLeft: "-8px",
                  color: "red",
                }}
              >
                *
              </p>
            </label>
            <input
              type="text"
              id="Telephone"
              name="Telephone"
              style={{
                border: "1px solid black",
                marginLeft: "-170px",
                width: "360px",
                borderRadius: "4px",
                height: "40px",
              }}
            />
          </div>
          <div style={{ padding: "10px" }}>
            <label
              style={{
                position: "absolute",
                marginLeft: "-360px",
                fontSize: "20px",
              }}
            >
              Mobile Telephone{" "}
              {/* <p
                style={{
                  display: "flex",
                  position: "absolute",
                  marginTop: "-30px",
                  marginLeft: "-8px",
                  color: "red",
                }}
              >
                *
              </p> */}
            </label>
            <input
              type="text"
              id="Mobile Telephone"
              name="MobileTelephone"
              style={{
                border: "1px solid black",
                marginLeft: "-170px",
                width: "360px",
                borderRadius: "4px",
                height: "40px",
              }}
            />
          </div>
          <div>
            <Captcha/>
          </div>

          <button
            style={{
              border: "1px solid black",
              backgroundColor: "#311B92",
              color: "white",
              width: "100px",
              height: "40px",
              marginLeft: "-100px",
              marginTop: "30px",
              borderRadius: "4px",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
