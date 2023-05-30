import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useSignupStore from "../../stores/signup-store";

const businessSchema = z.object({
  businessType: z.string(),
  businessName: z.string().optional(),
  businessLocation: z.string().optional(),
});

export default function BusinessField() {
  const { handleSubmit, register, watch } = useForm({
    resolver: zodResolver(businessSchema),
  });

  const navigate = useNavigate();
  const addValues = useSignupStore((state) => state.addValues);

  const businessType = watch("businessType");

  const handleTypeSubmit = (values) => {
    addValues(values);
    navigate("/auth/signup/inventory");
  };

  return (
    <div className="businessField container">
      <h2>What will you use (insert) for?</h2>
      <p className="mb-5">
        Let us customize your experience to best fit your needs.
      </p>
      <form
        onSubmit={handleSubmit(handleTypeSubmit)}
        className="businessForm needs-validation"
        noValidate
      >
        {!businessType && (
          <>
            <input
              type="radio"
              class="btn-check"
              id="personal-outlined"
              value="personal"
              {...register("businessType", { required: true })}
            />
            <label
              class="businessBtn btn btn-outline mb-3"
              for="personal-outlined"
            >
              <h4>Personal</h4>
              <p>I am managing my own items at home</p>
            </label>

            <input
              type="radio"
              class="btn-check"
              id="business-outlined"
              value="business"
              {...register("businessType", { required: true })}
            />
            <label
              class="businessBtn btn btn-outline mb-5"
              for="business-outlined"
            >
              <h4>Business</h4>
              <p>I am managing items in a workspace</p>
            </label>
            <div className="invalid-feedback invalidBusiness">
              Please make a selection.
            </div>
          </>
        )}

        {businessType == "business" && (
          <>
            <div className="formInput mb-2">
              <label htmlFor="name" className="form-label">
                Business Name
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Enter the Business Name"
                {...register("businessName", { required: true })}
              />
            </div>

            <div className="formInput mb-2">
              <label htmlFor="businessLocation" className="form-label">
                Location of the Business
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="businessLocation"
                placeholder="Please enter the location"
                {...register("businessLocation", { required: true })}
              />
            </div>
          </>
        )}

        <button type="submit" className="btn btn-dark">
          Next
        </button>
      </form>
    </div>
  );
}
