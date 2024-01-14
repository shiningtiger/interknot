interface MessageBase {
  user: {
    id: number
    name: string
    avatar: string
  }
  text: string
}

type Message = MessageBase & {
  id: number
  title: string
  image?: string
  time: number
  comments: MessageBase[]
}

interface Character {
  id: number
  name: string
  avatar: string
}