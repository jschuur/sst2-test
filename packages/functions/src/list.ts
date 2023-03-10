import { APIGatewayProxyHandlerV2 } from 'aws-lambda';
import { listEntries } from '../../core/src/log';

export const handler: APIGatewayProxyHandlerV2 = async () => {
  try {
    const logEntries = await listEntries();

    return { logEntries };
  } catch (e) {
    return {
      statusCode: 500,
      body: (e as Error).message,
    };
  }
};
