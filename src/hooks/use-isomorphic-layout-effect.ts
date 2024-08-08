import { useEffect, useLayoutEffect } from 'react';
import { IS_SERVER } from '@/lib/utils';

export const useIsomorphicLayoutEffect = IS_SERVER ? useEffect : useLayoutEffect;
