import { InputData } from "../../module/rightSideBar/RightSidebar";
import "./Style.css";

interface Props {
	inputValues?: InputData;
	handleInputChange?: (index: any, field: any, value: any) => void;
	handleAddPhoneNumber?: () => void;
	handleAddEmail?: () => void;
}

const Input = ({
	inputValues,
	handleAddEmail,
	handleAddPhoneNumber,
	handleInputChange,
}: Props) => {
	return (
		<div className='input__wrap'>
			<form className='input__form'>
				<label htmlFor='fname' className='input__title'>
					Email ID
				</label>
				<br />
				{inputValues &&
					inputValues.emails.map((email, index) => (
						<div key={index}>
							<input
								type='text'
								value={email}
								onChange={(e) =>
									handleInputChange &&
									handleInputChange(index, "emails", e.target.value)
								}
								required
								placeholder='eg. salesteam@br.in'
							/>
						</div>
					))}
				<br />
				<button
					type='button'
					className='cursor__button'
					onClick={handleAddEmail}>
					<i className='bi bi-plus-circle' /> Add More
				</button>
				<label htmlFor='lname' className='input__title'>
					Contact Number
				</label>
				<br />
				{inputValues &&
					inputValues.phoneNumbers.map((phoneNumber, index) => (
						<div key={index}>
							<input
								type='text'
								value={phoneNumber}
								onChange={(e) =>
									handleInputChange &&
									handleInputChange(index, "phoneNumbers", e.target.value)
								}
								required
								placeholder='eg. 8511591740'
							/>
						</div>
					))}
				<br />
				<button
					type='button'
					className='cursor__button'
					onClick={handleAddPhoneNumber}>
					<i className='bi bi-plus-circle' /> Add More
				</button>
			</form>
		</div>
	);
};

export default Input;
