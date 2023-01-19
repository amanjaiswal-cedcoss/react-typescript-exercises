import React, { useRef } from "react";
import { settings } from "../types";
interface IProps {
  settings: settings;
  setSettings: React.Dispatch<React.SetStateAction<settings>>;
}

function AddSetting(props: IProps) {
  const titleWithTagsRef = useRef<HTMLInputElement>(null);
  const defaultZipcodeRef = useRef<HTMLInputElement>(null);
  const defaultPriceRef = useRef<HTMLInputElement>(null);
  const defaultStockRef = useRef<HTMLInputElement>(null);

  const changeSettings = (e: React.FormEvent<HTMLFormElement>) => {
    if (
      titleWithTagsRef.current !== null &&
      defaultZipcodeRef.current !== null &&
      defaultPriceRef.current !== null &&
      defaultStockRef.current !== null
    ) {
      let obj = {
        titleIncludesTags: titleWithTagsRef.current.checked,
        defaultPrice: defaultPriceRef.current.value,
        defaultStock: Number(defaultStockRef.current.value),
        defaultZipcode: Number(defaultZipcodeRef.current.value),
      };
      props.setSettings({ ...obj });
    }
  };

  const toggleTitleTags = () => {
    let obj = props.settings;
    if (titleWithTagsRef.current !== null) {
      obj.titleIncludesTags = titleWithTagsRef.current.checked;
    }
    props.setSettings({ ...obj });
  };

  return (
    <form
      className="border border-dark m-2 card p-4 d-inline-flex card shadow-sm border-0"
      onSubmit={(e) => {
        e.preventDefault();
        changeSettings(e);
      }}
    >
      <h4>Add Settings</h4>
      <div className="mb-3 d-flex">
        <label className="form-label me-2">Title includes tags: </label>
        <span>Yes</span>
        <div className="form-check form-switch ms-2">
          <input
            className="form-check-input"
            onChange={toggleTitleTags}
            ref={titleWithTagsRef}
            defaultChecked={props.settings.titleIncludesTags}
            type="checkbox"
            id="titletags"
          />
        </div>
        <span>No</span>
      </div>
      <div className="mb-3">
        <label className="form-label">Default Zipcode</label>
        <input
          type="number"
          ref={defaultZipcodeRef}
          placeholder={String(props.settings.defaultZipcode)}
          className="form-control"
          id="defaultzipcode"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Default Price</label>
        <input
          type="text"
          ref={defaultPriceRef}
          placeholder={props.settings.defaultPrice}
          className="form-control"
          id="defaultprice"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Default Stock</label>
        <input
          type="number"
          ref={defaultStockRef}
          placeholder={String(props.settings.defaultStock)}
          className="form-control"
          id="defaultstock"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default AddSetting;
