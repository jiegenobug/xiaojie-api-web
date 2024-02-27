const TokenKey: string = 'csj-token'
const timeKey: string = 'csj-timestamp-key'
export function GetToken() {
  return localStorage.getItem(TokenKey)
}

export function SetToken(token: any) {
  return localStorage.setItem(TokenKey, token)
}

export function RemoveToken() {
  return localStorage.removeItem(TokenKey)
}

export function RemoveTimeKey() {
  return localStorage.removeItem(timeKey)
}

export function GetTimeStamp() {
  return localStorage.getItem(timeKey)
}

export function SetTimeStamp() {
  return localStorage.setItem(timeKey, String(Date.now()))
}
