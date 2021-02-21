import React, { useState, useEffect } from "react";

import OtpPinView from "./otppin.view";

interface OTPPinProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement> | any) => void;
}

const OTPPin: React.FC<OTPPinProps> = ({ handleChange }) => {
  const [otpValues, setOtpValues] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  let otpPinBackspace: string | null = null;

  const onKeyDownPin = (event: React.KeyboardEvent, pinNo: number) => {
    if (event.keyCode === 8) {
      document.getElementById(`pin${pinNo - 1}`)?.focus();
      otpPinBackspace = "pin" + pinNo;
    } else {
      otpPinBackspace = null;
    }
  };

  const handleOtpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const inputIndex = parseInt(name[name.length - 1]) - 1;

    if (!otpPinBackspace) {
      document.getElementById(`pin${inputIndex + 2}`)?.focus();
    }
    if (otpValues[5].length < 1) {
      otpValues[inputIndex] = value;
      setOtpValues([...otpValues]);
    }
  };

  useEffect(() => {
    document.getElementById("pin1")?.focus();
  }, []);

  useEffect(() => {
    let otp: string = otpValues.join("");
    if (otp.length === 6) {
      handleChange({ target: { name: "otp", value: otp } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otpValues]);

  return (
    <OtpPinView
      otpValues={otpValues}
      onKeyDownPin={onKeyDownPin}
      handleOtpChange={handleOtpChange}
    />
  );
};

export default OTPPin;
