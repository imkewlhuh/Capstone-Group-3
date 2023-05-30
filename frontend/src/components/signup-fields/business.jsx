import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useSignupStore from "../../stores/signup-store";

const businessSchema = z.object({
  businessType: z.string(),
});

export default function BusinessField() {
  const { handleSubmit, register } = useForm({
    resolver: zodResolver(businessSchema),
  });

  const navigate = useNavigate();
  const addValues = useSignupStore((state) => state.addValues);

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
        <input
          type="radio"
          class="btn-check"
          id="personal-outlined"
          value="personal"
          {...register("businessType", { required: true })}
        />
        <label class="businessBtn btn btn-outline mb-3" for="personal-outlined">
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
        <label class="businessBtn btn btn-outline mb-5" for="business-outlined">
          <h4>Business</h4>
          <p>I am managing items in a workspace</p>
        </label>
        <div className="invalid-feedback invalidBusiness">
          Please make a selection.
        </div>

        <button type="submit" className="btn btn-dark">
          Next
        </button>
      </form>
    </div>
  );
}
