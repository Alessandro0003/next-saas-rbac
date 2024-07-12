import { ability } from '@saas/auth'

const userInCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteOtherUser = ability.can('delete', 'User')

const userCannotDeleteOtherUser = ability.cannot('delete', 'User')

console.log(userInCanInviteSomeoneElse)
console.log(userCanDeleteOtherUser)
console.log(userCannotDeleteOtherUser)
