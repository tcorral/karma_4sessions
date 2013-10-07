function validate( value, param )
{
  switch(param)
  {
    case 's':
      return typeof value === 'string';
      break;
    case 'n':
      return typeof value === 'number';
      break;
    default:
      return true;
  }
}