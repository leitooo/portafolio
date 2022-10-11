

export interface AuthResponse {
    ok: boolean;
    uid?: string;
    name?: string;
    rut ?: string;
    aPaterno?: string;
    aMaterno?: string;
    genero?: string;
    direccion?: string;
    celular ?: number;
    telefono ? : number;
    comuna? : string;
    nameUsuario? : string
    email?: string;
    token?: string;
    msg?: string;
}

export interface Usuario {
    uid: string;
    name: string;
    rut: string;
    aPaterno: string;
    aMaterno: string;
    genero: string;
    direccion: string;
    celular: number;
    telefono: number;
    comuna: string;
    nameUsuario: string;
    email: string;
}