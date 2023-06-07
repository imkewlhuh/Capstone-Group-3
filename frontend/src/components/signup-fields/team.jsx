import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useSignupStore from "../../stores/signup-store";
import { signup } from "../../actions/auth";

const teamSchema = z.object({
  teamSelection: z.string(),
});

export default function TeamField(props) {
  const signupValues = useSignupStore((state) => state.signupValues);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(teamSchema),
  });

  const signupUser = async (values) => {
    const signedUpUser = await signup({ ...values, ...signupValues });
    console.log(signedUpUser);

    if (signedUpUser) {
      console.log("successfully signedup");
    }
  };

  return (
    <div className="businessField container">
      <h2>Do you have a team?</h2>
      <p className="mb-5">Add your team members to collaborate seamlessly.</p>
      <form
        onSubmit={handleSubmit(signupUser)}
        className="businessForm needs-validation"
        noValidate
      >
        <input
          type="radio"
          className="btn-check"
          id="personal-outlined"
          value="team"
          {...register("teamSelection", { required: true })}
        />
        <label
          className="businessBtn btn btn-outline mb-3"
          htmlFor="personal-outlined"
        >
          <h5>Yes, I have a team</h5>
          <p>Customize and onboard team members</p>
        </label>

        <input
          type="radio"
          className="btn-check"
          id="business-outlined"
          value="solo"
          {...register("teamSelection", { required: true })}
        />
        <label
          className="businessBtn btn btn-outline mb-5"
          htmlFor="business-outlined"
        >
          <h5>No, I'm a solo act</h5>
          <p>I am the only person managing my inventory</p>
        </label>
        <div className="invalid-feedback invalidTeam">
          Please make a selection.
        </div>

        <button type="submit" className="btn btn-dark">
          Finish and complete sign up
        </button>
      </form>
    </div>
  );
}
