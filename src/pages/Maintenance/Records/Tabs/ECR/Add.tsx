import { useSelector } from "react-redux";
import AddBox from "../../../../utils/AddBox";
import { loading, message, sidebar_data } from "../../../general_data";
import { constants, ecr_form_data } from "./ecr_data";
import { NavResolve } from "../../../../utils/NavResolve";
import { addData } from "../../../../../store/slices/maintenance";

const Add = () => {
  return (
    <>
      <p className="text-pri font-bold text-[18px] mt-[1.5em] ml-[4px]">
        Add {constants.name}
      </p>
      <AddBox
        loading={loading}
        data={addData}
        message={message}
        navResolve={
          <NavResolve
            name={`${constants.name} Form`}
            resolve_data={sidebar_data}
          />
        }
        endPoint={constants.url}
        formData={ecr_form_data}
      />
    </>
  );
};

export default Add;
