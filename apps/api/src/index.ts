import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'MEMBER', id: 'user_id' })

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCannotInviteSomeoneElse = ability.can('delete', 'User')

console.log(userCanInviteSomeoneElse)
console.log(userCannotInviteSomeoneElse)
