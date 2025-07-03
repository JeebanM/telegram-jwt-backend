import crypto from 'crypto';

export const validateTelegramData = (data: any): boolean => {
  const { hash, ...authData } = data;

  const secret = crypto
    .createHash('sha256')
    .update(process.env.TELEGRAM_BOT_TOKEN || '', 'utf8')
    .digest();

  const dataCheckString = Object.keys(authData)
    .sort()
    .map((key) => `${key}=${authData[key]}`)
    .join('\n');

  const hmac = crypto
    .createHmac('sha256', secret)
    .update(dataCheckString)
    .digest('hex');

  return hmac === hash;
};
