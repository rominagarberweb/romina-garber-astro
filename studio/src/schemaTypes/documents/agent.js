import {MdHeadsetMic} from 'react-icons/md'

export default {
  name: 'agent',
  type: 'document',
  title: 'Agent',
  icon: MdHeadsetMic,
  __experimental_actions: [
    /* 'create', */
    'update',
    /* 'delete', */
    'publish'
  ],
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule => Rule.required()
    },
    {
      name: 'agency',
      type: 'string',
      title: 'Agency',
      validation: Rule => Rule.required()
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      validation: Rule => Rule.required()
    }
  ]
}