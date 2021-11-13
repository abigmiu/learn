import {
    PipeTransform,
    Injectable,
    ArgumentMetadata,
    BadRequestException,
} from '@nestjs/common'
import { validate } from 'class-validator'
import { plainToClass } from 'class-transformer'

@Injectable()
export class ValidtionPipe implements PipeTransform<any> {
    private toValidate(metatype: Function) {
        console.log('toValidate')
        const types: Function[] = [String, Number, Array, Boolean, Object]
        return types.includes(metatype)
    }

    async transform(value: any, { metatype }: ArgumentMetadata) {
        console.log('trandform')
        console.log(metatype)
        if (!metatype || !this.toValidate(metatype)) {
            return value
        }

        const object = plainToClass(metatype, value)
        console.log(object)
        const errors = await validate(object)
        if (errors.length > 0) {
            throw new BadRequestException('Validation failed')
        }
        return value
    }
}
