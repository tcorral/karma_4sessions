describe('Validate', function()
{
  it('should return true if no argument is supplied', function()
  {
    expect(validate('test')).toBe(true);
  });
  it('should return true if argument is "s" and value is a string', function()
  {
    expect(validate('test', 's')).toBe( true );
  });
  it('should return false if argument is "n" and value is a string', function()
  {
    expect(validate('test', 'n')).toBe( false );
  });
});