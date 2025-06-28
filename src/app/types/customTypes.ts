export type cardPropTypes = {
    description: string,
    image: string,
    title:string,
    tags: string[],
    link:string
}

export type contactInfoType = {
    name:string,
    email:string,
    phone: number,
    subject:string,
    message:string
}


export type onChangeEeventType = {
    target:{
        name:string,
        value:string
    }
}