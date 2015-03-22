/**
 * Example async function.
 */
export async function stub() {
  if( Math.round(Math.random()) )
    return 'Success!';
  else
    throw 'Failure!';
}
