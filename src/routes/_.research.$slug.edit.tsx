import { isPreciousPlastic } from 'src/config/config'
import { AuthRoute } from 'src/pages/common/AuthRoute'
import { RESEARCH_EDITOR_ROLES } from 'src/pages/Research/constants'
import EditResearch from 'src/pages/Research/Content/EditResearch'

export async function clientLoader() {
  return null
}

export default function Index() {
  const roles = isPreciousPlastic() ? [] : RESEARCH_EDITOR_ROLES

  return (
    <AuthRoute roleRequired={roles}>
      <EditResearch />
    </AuthRoute>
  )
}