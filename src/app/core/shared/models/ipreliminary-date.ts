import { TypeEmail } from "../enums/type-email.enum";
import { TypeService } from "../enums/type-service.enum";

export interface IPreliminaryData {

    subject: string | null | undefined,
    typeEmail: TypeEmail | null | undefined,
    services: TypeService[] | null | undefined
}
