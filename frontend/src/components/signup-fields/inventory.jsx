import { useEffect } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import Select, { components } from "react-select";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import useSignupStore from "../../stores/signup-store";
import { zodResolver } from "@hookform/resolvers/zod";

const CustomOption = (props) => {
  return (
    <components.Option {...props}>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id={`option-${props.label}`}
          checked={props.isSelected}
          readOnly
        />
        <label className="form-check-label" htmlFor={`option-${props.label}`}>
          {props.label}
        </label>
      </div>
    </components.Option>
  );
};

const inventoryListSchema = z.object({
  inventoryTypes: z
    .object({
      label: z.string(),
      value: z.number(),
    })
    .array()
    .min(1),
});

export default function InventoryField() {
  const productTypes = useLoaderData();
  const navigate = useNavigate();
  const addValues = useSignupStore((state) => state.addValues);

  const { control, handleSubmit, watch } = useForm({
    resolver: zodResolver(inventoryListSchema),
  });

  const handleListSubmit = (values) => {
    const productTypes = values.inventoryTypes.map((val) => val.value);
    const inventoryTypes = { productTypes };
    addValues(inventoryTypes);
    navigate("/auth/signup/team");
  };

  return (
    <div className="inventoryField container">
      <h2>Tell us a little more about your inventory.</h2>
      <p className="mb-5">More details, the better.</p>
      <form
        onSubmit={handleSubmit(handleListSubmit)}
        className="inventoryForm needs-validation"
        noValidate
      >
        {productTypes && productTypes.success == true && (
          <Controller
            name="inventoryTypes"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={productTypes.productTypeList}
                components={{ Option: CustomOption }}
                isMulti
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                className="form-select-sm"
                required
              />
            )}
          />
        )}

        <div className="invalid-feedback invalidInventory">
          Please enter a field.
        </div>

        <button type="submit" className="btn btn-dark">
          Next
        </button>
      </form>
    </div>
  );
}
