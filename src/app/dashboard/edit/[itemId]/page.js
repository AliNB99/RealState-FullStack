import ProfileRealState from "@/models/ProfileRealState";
import connectDB from "@/utils/connectDB";
import React from "react";
import FormAdvertisingPage from "src/components/templates/FormAdvertisingPage";

async function EditAdvertising(req) {
  await connectDB();
  const id = req.params.itemId;

  const advertising = await ProfileRealState.findOne({ _id: id });

  return (
    <div>
      <FormAdvertisingPage data={JSON.parse(JSON.stringify(advertising))} />
    </div>
  );
}

export default EditAdvertising;
