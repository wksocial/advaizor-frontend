import { useState } from "react";
import Dropdown from "./Dropdown";

const EditProfileComponent = () => {
  const [activeStep, setActiveStep] = useState("education");

  // Education states
  const [qualification, setQualification] = useState("");
  const [field, setField] = useState("");
  const [institution, setInstitution] = useState("");

  // Skill states
  const [skillName, setSkillName] = useState("");
  const [experience, setExperience] = useState("");
  const [proficiency, setProficiency] = useState("");

  return (
    <div>
      <h2 className="text-2xl font-medium text-black-primary mb-6 text-center">
        Set up your information
      </h2>

      {/* Content */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Stepper */}
        <div className="flex flex-col">
          {/* Step 1 - Education */}
          <div
            className="flex items-start gap-3 mb-6 cursor-pointer"
            onClick={() => setActiveStep("education")}
          >
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${
                  activeStep === "education"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                01
              </div>
              <div className="h-15 border-l border-dashed border-gray-300"></div>
            </div>
            <div>
              <p
                className={`text-xl font-medium mb-2 ${
                  activeStep === "education"
                    ? "text-blue-600"
                    : "text-black-primary"
                }`}
              >
                Education
              </p>
              <p className="text-gray-primary text-base">
                Please provide your educational background and any relevant
                documents.
              </p>
            </div>
          </div>

          {/* Step 2 - Skill */}
          <div
            className="flex items-start gap-3 mb-6 cursor-pointer"
            onClick={() => setActiveStep("skill")}
          >
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${
                  activeStep === "skill"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                02
              </div>
            </div>
            <div>
              <p
                className={`text-xl font-medium mb-2 ${
                  activeStep === "skill"
                    ? "text-blue-600"
                    : "text-black-primary"
                }`}
              >
                Skills
              </p>
              <p className="text-gray-primary text-base">
                Share your skills and any relevant work documents.
              </p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div>
          {activeStep === "education" ? (
            <>
              <h2 className="text-xl font-medium text-black-primary mb-5">
                Educational Information
              </h2>

              <Dropdown
                label="Educational Qualification"
                options={["Bachelor", "Master", "PhD"]}
                selected={qualification}
                setSelected={setQualification}
                placeholder="Select Qualification"
              />

              <Dropdown
                label="Field of Study"
                options={["Computer Science", "Mathematics", "Engineering"]}
                selected={field}
                setSelected={setField}
                placeholder="Select Field of Study"
              />

              <Dropdown
                label="Institution Name"
                options={["Oxford", "Harvard", "MIT"]}
                selected={institution}
                setSelected={setInstitution}
                placeholder="Select Institution"
              />
            </>
          ) : (
            <>
              <h2 className="text-xl font-medium text-black-primary mb-5">
                Skills Information
              </h2>

              <Dropdown
                label="Skill Name"
                options={["JavaScript", "React", "Python", "UI/UX Design"]}
                selected={skillName}
                setSelected={setSkillName}
                placeholder="Select Skill"
              />

              <Dropdown
                label="Experience Level"
                options={["Beginner", "Intermediate", "Advanced"]}
                selected={experience}
                setSelected={setExperience}
                placeholder="Select Experience Level"
              />

              <Dropdown
                label="Proficiency"
                options={["Basic", "Good", "Expert"]}
                selected={proficiency}
                setSelected={setProficiency}
                placeholder="Select Proficiency"
              />
            </>
          )}

          {/* Add Another */}
          <button className="w-full border text-sm font-bold cursor-pointer rounded-full py-2 flex items-center justify-center text-orange-primary bg-[#FFF1EE] hover:bg-orange-primary hover:text-white transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
            >
              <path
                d="M16.4999 28.0005C23.1274 28.0005 28.4999 22.6279 28.4999 16.0005C28.4999 9.37307 23.1274 4.00049 16.4999 4.00049C9.87252 4.00049 4.49994 9.37307 4.49994 16.0005C4.49994 22.6279 9.87252 28.0005 16.4999 28.0005Z"
                stroke="#F34822"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M11.5001 16.0005H21.5001"
                stroke="#F34822"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.4999 10.9995V20.9995"
                stroke="#F34822"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Add Another
          </button>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="w-full flex justify-between mt-6 gap-6">
        {activeStep === "education" ? (
          // Step 1 → Show Cancel
          <button className="w-1/2 px-6 py-3 bg-[#E9E9E9] hover:bg-orange-primary rounded-full text-black-primary hover:text-white cursor-pointer transition">
            Cancel
          </button>
        ) : (
          // Step 2+ → Show Back
          <button
            className="w-1/2 px-6 py-3 bg-[#E9E9E9] hover:bg-orange-primary rounded-full text-black-primary hover:text-white cursor-pointer transition"
            onClick={() => setActiveStep("education")}
          >
            Back
          </button>
        )}

        {activeStep === "education" ? (
          <button
            className="w-1/2 px-6 py-3 bg-[#E9E9E9] hover:bg-orange-primary rounded-full text-black-primary hover:text-white cursor-pointer transition"
            onClick={() => setActiveStep("skill")}
          >
            Next
          </button>
        ) : (
          <button
            className="w-1/2 px-6 py-3 bg-[#E9E9E9] hover:bg-orange-primary rounded-full text-black-primary hover:text-white cursor-pointer transition"
            onClick={() => console.log("Update submitted")}
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default EditProfileComponent;
