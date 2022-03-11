import React from "react";
import { useParams } from "react-router-dom";

export default function UserDashboard() {
  const { id } = useParams();
  return <div>This is user {id}</div>;
}
