import { type SchemaTypeDefinition } from 'sanity'
import post from '../post'
import { author } from '../author'
import {comments} from '../comments'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, comments],
}
