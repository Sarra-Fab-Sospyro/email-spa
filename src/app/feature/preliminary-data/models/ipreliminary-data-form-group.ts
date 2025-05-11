import { FormControl } from "@angular/forms";
import { TypeEmail } from "../../../core/shared/enums/type-email.enum";
import { TypeService } from "../../../core/shared/enums/type-service.enum";

export interface IPreliminaryDataFormGroup {

    subject: FormControl<string | null | undefined>,
    typeEmail: FormControl<TypeEmail | null | undefined>,
    service: FormControl<TypeService | null | undefined>,
}
