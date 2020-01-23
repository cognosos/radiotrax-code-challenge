// lib
import _ from 'lodash'

/**
 * Ensure resource id's are numerical.
 * @param {Mixed} id The id of a resource.
 * @return {Number} A numerical representation of an id, or the unaltered id.
 */
export function cleanId(id){
  if (!Number.isNaN(Number(id)) && id !== null) {
    return _.toInteger(id)
  }

  return id
}
