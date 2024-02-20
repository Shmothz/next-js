export type ILink = {
 label: string
 route: string
}
type Links = ILink[]
export const routes: Links = [
 {label: 'home', route: '/'},
 {label: 'about', route: '/about'},
 {label: 'cards', route: '/cards'},
]
