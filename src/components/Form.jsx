import React, { Fragment, useEffect, useState } from "react";
import State from "./State.json";
import Department from "./Department.json";
import Designation from "./Designation.json";
import "./form.css";
import "./Submit";
import Submit from "./Submit";

let Dropdown = (props) => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [filtDist, setfiltDist] = useState([]);


 
 const [acceptGenderData, setAcceptGenderData] = useState("");
  const [acceptPersonData, setAcceptPersonData] = useState("");


//   // console.log(props.onEditID);



  const onRadioGender = (event) => {

    setAcceptGenderData(event.target.value);
    props.onGender(acceptGenderData)

  };
  console.log(acceptGenderData)
  const onRadioPerson = (event) => {

    setAcceptPersonData(event.target.value);
    props.onPerson(acceptPersonData)

  };
  console.log(acceptPersonData)

  //  let editArray =[];
  //  editArray=props.onEditID;
  //  console.log(editArray);
  // // const[editStateVal,seteditStateVal]=useState([]);
  // seteditStateVal(editArray[1]);

  // const[editID,setEditId] =useState([]);
  // setEditId(props.onEditID);
  // console.log(editID);

  const getDistrict = () => {
    if (!selectedState) return;
    const ret = State.states.filter(({ state }) => selectedState === state);
    // console.log(ret[0].districts);
    return setfiltDist(ret[0].districts);
  };
  // render districts array as options in District dropdown

  useEffect(() => {
    getDistrict(selectedState);
    props.onSelect2(selectedState);
  }, [selectedState]);

  // useEffect(()=>{
  //   getDistrict()
  // },[]);

  //DateOfBirth

  //   const DateOfBirth = (props) => {
  //     // validation --> minimum 100 years back could be selected and maximum D.O.B. could be today
  //     const minday= "1922-01-01";
  //     let today = new Date();

  //     let aaj = `${("0"+today.getFullYear()).slice(-4)}-${("0" + (today.getMonth() + 1)).slice(-2)}-${("0" + today.getDate()).slice(-2)}`;

  //     const [dob, setDob] = useState("");
  //     const onInputChange = e => {
  //         setDob(e.target.value);
  //     };
  // props.saveDob(dob);

  return (
    <>
      <form>
        <div className="formCss">
          <h1 style={{ paddingLeft: "5rem", color: "red" }}>
            Registration Form
          </h1>
          <table>
            <tr>
              <td>
                <label htmlFor="">Name</label>
              </td>
              <td>
                <input
                  type="text"
                  name=""
                  id=""
                  required={true}
                  onChange={(event) => {
                    console.log(props.onName(event.target.value));
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Organization</label>
              </td>
              <td>
                <input
                  type="text"
                  name=""
                  id=""
                  required={true}
                  onChange={(event) => {
                    console.log(props.onOrgani(event.target.value));
                  }}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="">Date of Birth</label>
              </td>
              <td>
                <input
                  type="date"
                  name=""
                  id=""
                  required={true}
                  onChange={(event) => {
                    console.log(props.onDOB(event.target.value));
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Date of Joining</label>
              </td>
              <td>
                <input
                  type="date"
                  name=""
                  id=""
                  required={true}
                  onChange={(event) => {
                    console.log(props.onDOJ(event.target.value));
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="lableCss" htmlFor="">
                  Gender
                </label>
              </td>

              <td>
                <input
                  type="radio"
                  value="Male"
                  name="Gender"
                  onChange={
                    onRadioGender
                  }
                  
                />
                Male
                <input
                  type="radio"
                  value="Female"
                  name="Gender"
                  onChange={
                    onRadioGender         }
                  
                />
                Female
                <input
                  type="radio"
                  value="Other"
                  name="Gender"
                  onChange={
                    onRadioGender
                  }
                  
                />
                Other
              </td>
            </tr>
            <tr>
              <td>
                <label className="lableCss" htmlFor="">
                  Are you Ex-Employee
                </label>
              </td>

              <td>
                <input
                  type="radio"
                  name="Person"
                  value="Yes"
                  onChange={
                    onRadioPerson
                  }
                  id=""
                />
                Yes
                <input
                  type="radio"
                  name="Person"
                  value="No"
                  onChange={
                    onRadioPerson
                  }
                  
                />
                No
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Favourite Code Editor</label>
              </td>
              <td>
                <input type="checkbox" name="" id="" />
                Sublime
                <input type="checkbox" name="" id="" />
                VS Code
                <input type="checkbox" name="" id="" />
                Eclipse
                <input type="checkbox" name="" id="" />
                Atom
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Favourite Language</label>
              </td>
              <td>
                <input type="checkbox" name="" id="" />
                React
                <input type="checkbox" name="" id="" />
                Python
                <input type="checkbox" name="" id="" />
                Ruby
                <input type="checkbox" name="" id="" />C language
              </td>
            </tr>
            {/* State */}
            <tr>
              <td>
                <label>
                  <b>Select State: </b>
                </label>
              </td>
              <td>
                <select
                  required={true}
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                  }}
                  id="test"
                >
                  <option>-----------Select State------------</option>
                  {State &&
                    State.states.map(({ state }) => (
                      <option value={state}>{state}</option>
                    ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  <b>Select District:</b>{" "}
                </label>
              </td>
              <td>
                <>
                  <select
                    required={true}
                    value={selectedDistrict}
                    onChange={(event) => {
                      const { value } = event.target;

                      setSelectedDistrict(value);
                      props.onSelect3(value);
                    }}
                  >
                    <option selected disabled={false}>
                      ----------Select District-----------
                    </option>
                    {filtDist.length !== 0 &&
                      filtDist.map((dist) => (
                        <option key={Math.trunc(Math.random() * 1000000)}>
                          {dist}
                        </option>
                      ))}
                  </select>
                </>
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  <b> Select Department:</b>{" "}
                </label>
              </td>
              <td>
                <select
                  required={true}
                  onChange={(event) => {
                    props.onSelect(event.target.value);
                  }}
                >
                  <Fragment>
                    <option selected disabled=" ">
                      -------Select Department-------
                    </option>
                    {Department.map((Department) => (
                      <option
                        key={Department.id}
                        name={Department.name}
                        value={Department.name}
                      >
                        {Department.name}
                      </option>
                    ))}
                  </Fragment>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  <b>Select Designation: </b>
                </label>
              </td>
              <td>
                <select
                  required={true}
                  onChange={(event) => {
                    props.onSelect1(event.target.value);
                  }}
                >
                  <Fragment>
                    <option selected disabled=" ">
                      -------Select Designation-------
                    </option>
                    {Designation.map((Designation) => (
                      <option
                        key={Designation.id}
                        name={Designation.name}
                        value={Designation.name}
                      >
                        {Designation.name}
                      </option>
                    ))}
                  </Fragment>
                </select>
              </td>
            </tr>
            <br />
            {/* <tr>
              <td>
                <Submit
                
                />
              </td>
            </tr> */}
          </table>
        </div>
      </form>
    </>
  );
};

export default Dropdown;
