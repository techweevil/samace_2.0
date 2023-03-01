import { loading, message, sidebar_data } from "../../../general_data";
import { constants, eor_form_data } from "./eor_data";
import { NavResolve } from "../../../../utils/NavResolve";
import {
  getSingleData,
  updateData,
} from "../../../../../store/slices/maintenance";
import EditBox from "../../../../utils/EditBox";
import { useSelector } from "react-redux";

const Edit = () => {
  const { data, loading, message } = useSelector(
    (state: any) => state.maintenance
  );

  return (
    <>
      <p className="text-pri font-bold text-[18px] mt-[1.5em] ml-[4px]">
        Edit {constants.name}
      </p>
      <EditBox
        loading={loading}
        message={message}
        updateData={updateData}
        getSingleData={getSingleData}
        data={data}
        navResolve={
          <NavResolve
            name={`${constants.name} Form`}
            resolve_data={sidebar_data}
          />
        }
        endPoint={constants.url}
        formData={eor_form_data}
      />
    </>
  );
};

export default Edit;
