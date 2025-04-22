import { Static, TSchema } from '@sinclair/typebox'
import { FieldValues, Resolver } from 'react-hook-form'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'

const ajv = new Ajv({ allErrors: true, strict: false })
addFormats(ajv)

export function typeBoxResolver<T extends TSchema>(
  schema: T
): Resolver<Static<T> & FieldValues> {
  const validate = ajv.compile(schema)

  return async (values) => {
    const isValid = validate(values)

    if (isValid) {
      return {
        values: values as any,
        errors: {},
      }
    }

    const errors = (validate.errors || []).reduce((acc, err) => {
      const key = err.instancePath?.slice(1) || err.params.missingProperty || 'unknown'
      acc[key] = {
        type: err.keyword,
        message: err.message || 'Campo inválido',
      }
      return acc
    }, {} as Record<string, any>)

    return {
      values: {},
      errors,
    }
  }
}
