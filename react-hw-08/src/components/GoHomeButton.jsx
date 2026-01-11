import { useNavigate } from 'react-router'
import frontRoutes from '../routes/frontRoutes'

function GoHomeButton() {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(frontRoutes.navigate.home)}
      style={{
        backgroundColor: '#4caf50',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '1rem'
      }}
    >
      На головну
    </button>
  )
}

export default GoHomeButton
