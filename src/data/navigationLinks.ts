type Link = {
  to: string,
  text: string
}

type Links = Link[]

export const navigationLinks: Links = [
  { to: "/", text:"ホーム"},
  { to: "/story/", text: "ストーリー" },
  { to: "/credit/", text: "クレジット" },
  { to: "/other/", text: "その他"}
]