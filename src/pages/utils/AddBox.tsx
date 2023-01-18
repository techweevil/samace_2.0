import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DashboardContext } from "../Dashboard/Dashboard";
import { currentUser } from "../../globals/HelperFunctions";
import { FormContainer } from "./FormContainer";
import { SmallLoading } from "../../components/Loading";
import InputComp from "./InputComp";

const AddBox = ({ loading, addData, navResolve, endPoint, formData }: any) => {
  const { set_show_decision_modal, inputValue } = useContext(DashboardContext);

  const dispatch = useDispatch<any>();

  const handleCancel = () => {
    window.scrollTo(0, 0);
    set_show_decision_modal(() => true);
  };

  const handleSend = (e: any, url: string) => {
    e.preventDefault();
    dispatch(addData(url, inputValue, "nill", JSON.parse(currentUser).token));
  };
  const handleSendNew = (e: any, url: string) => {
    e.preventDefault();
    dispatch(addData(url, inputValue, "new", JSON.parse(currentUser).token));
  };
  return (
    <div>
      <>{navResolve}</>
      <div className="w-full mt-[2em]  ">
        {formData?.map((item: any, index: number) => {
          return (
            <FormContainer key={index} section_name={item.section}>
              {item.data.map((item: any, index: number) => {
                return (
                  <InputComp
                    key={index}
                    name={item.name}
                    type={item.type}
                    placeholder={item.placeholder}
                    optionList={item.optionList}
                  />
                );
              })}
            </FormContainer>
          );
        })}

        <FormContainer>
          <div className="text-white flex md:gap-[3em] gap-[2em] ">
            <button
              onClick={(e) => handleSend(e, endPoint)}
              className="rounded-md bg-[#2F5597] font-[700]  py-[1em] w-full"
            >
              {loading ? <SmallLoading /> : "Save"}
            </button>

            <button
              onClick={(e) => handleSendNew(e, endPoint)}
              className="rounded-md bg-[#2F5597] font-[700]  py-[1em] w-full"
            >
              {loading ? <SmallLoading /> : "Save & New"}
            </button>
            <button
              onClick={handleCancel}
              className="rounded-md bg-[#FF5552] font-[700]  py-[1em] w-full"
            >
              Cancel
            </button>
          </div>
        </FormContainer>
      </div>
    </div>
  );
};

export default AddBox;
