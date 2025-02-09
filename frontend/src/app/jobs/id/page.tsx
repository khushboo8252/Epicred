'use client'; // Add this at the top!

import { useParams } from "next/navigation";

export default function JobPage() {
  const { id } = useParams(); // Now works in client-side

  return <div>Job ID: {id}</div>;
}
