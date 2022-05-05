export const getURI = (
  //username: string,
  //password: string,
  host: string,
  port: number,
  databaseName: string,
): string => `mongodb://${host}:${port}/${databaseName}`;

// `mongodb://${username}:${password}@${host}:${port}/${databaseName}`
