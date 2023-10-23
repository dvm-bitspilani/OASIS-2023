export async function getCollegeData() {
  const res = await fetch(
    "https://bits-oasis.org/2023/main/registrations/get_college"
  )
  if (!res.ok) {
    throw new Error("Failed to fetch college")
  }
  return res.json()
}
export async function getEventsData() {
  const res = await fetch(
    "https://bits-oasis.org/2023/main/registrations/events"
  )
  if (!res.ok) {
    throw new Error("Failed to get Events")
  }
  return res.json()
}
