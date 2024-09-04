export const CustomToastPassword = ({ missingCriteria }) => {
  return (
    <div>
      <div style={{ color: '#e74c3c' }}>Your password isn't strong enough</div>
      <ul style={{ margin: 0, paddingLeft: '20px' }}>
        {missingCriteria.minLength && (
          <li>Password must be at least 8 characters</li>
        )}
        {missingCriteria.lowercase && <li>At least one lowercase alphabet</li>}
        {missingCriteria.uppercase && <li>At least one uppercase alphabet</li>}
        {missingCriteria.numeric && <li>At least one numeric digit</li>}
        {missingCriteria.specialChar && <li>At least one special character</li>}
        {missingCriteria.lengthRange && (
          <li>The total length must be in the range [8-15]</li>
        )}
      </ul>
    </div>
  )
}

export const CustomToastEmail = ({ missingCriteria }) => {
  return (
    <div style={{ color: '#e74c3c' }}>
      <ul>
        {missingCriteria.empty && <li>Email address cannot be empty</li>}
        {missingCriteria.invalidFormat && (
          <li>Email address must be in a valid format</li>
        )}
        {missingCriteria.taken && <li>Email address is already taken</li>}
      </ul>
    </div>
  )
}
