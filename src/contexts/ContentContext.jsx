import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ensureSiteContent, subscribeToSiteContent, saveSiteContent } from '../data/content';
import { defaultContent } from '../data/defaultContent';

const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  const [content, setContent] = useState(defaultContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ensureSiteContent().catch(() => null);

    const unsubscribe = subscribeToSiteContent((nextContent) => {
      setContent(nextContent);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = useMemo(
    () => ({
      content,
      loading,
      saveContent: saveSiteContent,
    }),
    [content, loading]
  );

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContent() {
  const context = useContext(ContentContext);

  if (!context) {
    throw new Error('useContent must be used inside ContentProvider');
  }

  return context;
}
