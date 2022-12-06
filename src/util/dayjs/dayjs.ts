import { default as dayjs } from 'dayjs';
import timezone from 'dayjs/plugin/timezone.js';
import utc from 'dayjs/plugin/utc.js';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(advancedFormat);

export default dayjs;
