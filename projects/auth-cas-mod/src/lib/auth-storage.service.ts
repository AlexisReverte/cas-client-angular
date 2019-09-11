import { Injectable } from '@angular/core';
import { EmissorEventService } from './emissor-evento.service';

const LOGIN_KEY = "loginUser"
const COD_KEY = "codUser"
const TICKET_KEY = "ticketUser"

@Injectable()
export class AuthStorageService {

    constructor(private eventoService: EmissorEventService) { }

    saveLoginUnico(loginUnico: string) {
        window.sessionStorage.setItem(LOGIN_KEY, loginUnico)
        this.eventoService.emitChange('loaded');
    }

    getLoginUnico(): string {
        return window.sessionStorage.getItem(LOGIN_KEY)
    }

    saveCodUsuario(codUsuario: string) {
        window.sessionStorage.setItem(COD_KEY, codUsuario)
    }

    getCodUsuario(): string {
        return window.sessionStorage.getItem(COD_KEY)
    }

    saveTicket(ticket: string) {
        window.sessionStorage.setItem(TICKET_KEY, ticket)
    }

    getTicket(): string {
        return window.sessionStorage.getItem(TICKET_KEY)
    }

    remove() {
        window.sessionStorage.removeItem(COD_KEY)
        window.sessionStorage.removeItem(TICKET_KEY)
        window.sessionStorage.removeItem(LOGIN_KEY)
    }

}
