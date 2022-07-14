export default function changeToUsername(username: string) {
  return username.replace(/[^a-zA-Z0-9]/g, '');
}
