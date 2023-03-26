import { useState } from "react";
import { useForm } from "react-hook-form";

interface CustomerFormValues {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  zipCode: string;
  phoneNumber: string;
  email: string;
}

const CustomerForm = () => {
  const { register, handleSubmit } = useForm<CustomerFormValues>();

  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
  });

  const registerUserInfo = (data: CustomerFormValues) => {
    setCustomerInfo(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(registerUserInfo)}>
        <input
          placeholder="first name"
          {...register("firstName", { required: true })}
        />
        <input
          placeholder="last name"
          {...register("lastName", { required: true })}
        />
        <input
          placeholder="street"
          {...register("street", { required: true })}
        />
        <input placeholder="city" {...register("city", { required: true })} />
        <input
          placeholder="zip code"
          {...register("zipCode", { required: true })}
        />
        <input
          placeholder="phone"
          {...register("phoneNumber", { required: true })}
        />
        <input placeholder="email" {...register("email", { required: true })} />
        <button type="submit">Submit</button>
      </form>
      <table>
        <tr>
          <th>First name</th>
          <th>{customerInfo.firstName}</th>
        </tr>
      </table>
    </>
  );
};

export default CustomerForm;