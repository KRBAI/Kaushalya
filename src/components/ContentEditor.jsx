import { useEffect, useState } from 'react';

function ContentEditor({ content, onSave }) {
  const [draft, setDraft] = useState(content);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    setDraft(content);
  }, [content]);

  const updateSiteField = (field, value) => {
    setDraft((current) => ({
      ...current,
      site: {
        ...(current.site || {}),
        [field]: value,
      },
    }));
  };

  const updateSiteContact = (field, value) => {
    setDraft((current) => ({
      ...current,
      site: {
        ...(current.site || {}),
        contactDetails: {
          ...(current.site?.contactDetails || {}),
          [field]: value,
        },
      },
    }));
  };

  const updateNavItem = (index, value) => {
    setDraft((current) => {
      const navItems = [...(current.site?.navItems || [])];
      navItems[index] = { ...navItems[index], label: value };

      return {
        ...current,
        site: {
          ...(current.site || {}),
          navItems,
        },
      };
    });
  };

  const updateTopLevelField = (field, value) => {
    setDraft((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const updateArrayItem = (section, index, field, value) => {
    setDraft((current) => {
      const items = [...(current[section] || [])];
      items[index] = { ...items[index], [field]: value };
      return { ...current, [section]: items };
    });
  };

  const addArticle = () => {
    const nextId = `post-${Date.now()}`;

    setDraft((current) => ({
      ...current,
      articles: [
        ...(current.articles || []),
        {
          id: nextId,
          category: 'New Post',
          title: 'New post title',
          description: 'Write your new post here.',
          image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
          tone: 'blue',
          commentsEnabled: true,
        },
      ],
    }));
  };

  const removeArticle = (index) => {
    setDraft((current) => ({
      ...current,
      articles: (current.articles || []).filter((_, articleIndex) => articleIndex !== index),
    }));
  };

  const updateListItem = (section, index, field, value) => {
    updateArrayItem(
      section,
      index,
      field,
      value
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean)
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setStatus('');

    try {
      await onSave(draft);
      setStatus('Saved to Firestore.');
    } catch (saveError) {
      setStatus(saveError?.message || 'Save failed. Check Firestore rules and permissions.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="content-editor">
      <div className="content-editor__header">
        <div>
          <span className="eyebrow">Admin Tools</span>
          <h2>Edit Website Content</h2>
        </div>
        <button type="button" onClick={() => setDraft(content)} className="secondary-button">
          Reset draft
        </button>
      </div>

      {status ? <p className="content-editor__status">{status}</p> : null}

      <form onSubmit={handleSubmit} className="content-editor__form">
        <section className="content-editor__group">
          <h3>Brand & Navigation</h3>
          <div className="content-editor__grid">
            <label>
              Site title
              <input value={draft.site?.title || ''} onChange={(event) => updateSiteField('title', event.target.value)} />
            </label>
            <label>
              Site tagline
              <input value={draft.site?.tagline || ''} onChange={(event) => updateSiteField('tagline', event.target.value)} />
            </label>
            <label>
              Contact location
              <input value={draft.site?.contactDetails?.location || ''} onChange={(event) => updateSiteContact('location', event.target.value)} />
            </label>
            <label>
              Contact email
              <input value={draft.site?.contactDetails?.email || ''} onChange={(event) => updateSiteContact('email', event.target.value)} />
            </label>
          </div>

          <div className="content-editor__grid content-editor__grid--three">
            {(draft.site?.navItems || []).map((item, index) => (
              <label key={item.id || index}>
                Nav item {index + 1}
                <input value={item.label || ''} onChange={(event) => updateNavItem(index, event.target.value)} />
              </label>
            ))}
          </div>
        </section>

        <section className="content-editor__group">
          <h3>Homepage</h3>
          <div className="content-editor__grid">
            <label>
              Hero headline
              <input
                value={draft.hero?.title || ''}
                onChange={(event) => updateTopLevelField('hero', { ...(draft.hero || {}), title: event.target.value })}
              />
            </label>
            <label>
              Hero description
              <textarea
                rows="3"
                value={draft.hero?.description || ''}
                onChange={(event) => updateTopLevelField('hero', { ...(draft.hero || {}), description: event.target.value })}
              />
            </label>
            <label>
              Primary CTA
              <input
                value={draft.hero?.ctaPrimary || ''}
                onChange={(event) => updateTopLevelField('hero', { ...(draft.hero || {}), ctaPrimary: event.target.value })}
              />
            </label>
            <label>
              Secondary CTA
              <input
                value={draft.hero?.ctaSecondary || ''}
                onChange={(event) => updateTopLevelField('hero', { ...(draft.hero || {}), ctaSecondary: event.target.value })}
              />
            </label>
          </div>

          <div className="content-editor__grid content-editor__grid--three">
            {(draft.heroStats || []).map((stat, index) => (
              <label key={`${stat.label}-${index}`}>
                Stat {index + 1}
                <input
                  value={stat.value || ''}
                  onChange={(event) => updateArrayItem('heroStats', index, 'value', event.target.value)}
                  placeholder="Value"
                />
                <input
                  value={stat.label || ''}
                  onChange={(event) => updateArrayItem('heroStats', index, 'label', event.target.value)}
                  placeholder="Label"
                />
              </label>
            ))}
          </div>

          <div className="content-editor__grid">
            <label>
              Spotlight tag
              <input
                value={draft.spotlight?.tag || ''}
                onChange={(event) => updateTopLevelField('spotlight', { ...(draft.spotlight || {}), tag: event.target.value })}
              />
            </label>
            <label>
              Spotlight title
              <input
                value={draft.spotlight?.title || ''}
                onChange={(event) => updateTopLevelField('spotlight', { ...(draft.spotlight || {}), title: event.target.value })}
              />
            </label>
            <label>
              Spotlight description
              <textarea
                rows="3"
                value={draft.spotlight?.description || ''}
                onChange={(event) => updateTopLevelField('spotlight', { ...(draft.spotlight || {}), description: event.target.value })}
              />
            </label>
            <label>
              Spotlight image URL
              <input
                value={draft.spotlight?.image || ''}
                onChange={(event) => updateTopLevelField('spotlight', { ...(draft.spotlight || {}), image: event.target.value })}
              />
            </label>
          </div>
        </section>

        <section className="content-editor__group">
          <h3>Featured Projects</h3>
          {(draft.featuredProjects || []).map((item, index) => (
            <div key={`${item.title}-${index}`} className="content-editor__card">
              <label>
                Project label
                <input value={item.label || ''} onChange={(event) => updateArrayItem('featuredProjects', index, 'label', event.target.value)} />
              </label>
              <label>
                Project title
                <input value={item.title || ''} onChange={(event) => updateArrayItem('featuredProjects', index, 'title', event.target.value)} />
              </label>
              <label>
                Description
                <textarea rows="3" value={item.description || ''} onChange={(event) => updateArrayItem('featuredProjects', index, 'description', event.target.value)} />
              </label>
              <label>
                Image URL
                <input value={item.image || ''} onChange={(event) => updateArrayItem('featuredProjects', index, 'image', event.target.value)} />
              </label>
            </div>
          ))}
        </section>

        <section className="content-editor__group">
          <h3>Blog Posts</h3>
          <button type="button" className="secondary-button" onClick={addArticle}>
            Add new post
          </button>
          {(draft.articles || []).map((item, index) => (
            <div key={item.id || index} className="content-editor__card">
              <div className="content-editor__card-head">
                <strong>Post {index + 1}</strong>
                <button type="button" className="text-button" onClick={() => removeArticle(index)}>
                  Delete
                </button>
              </div>
              <label>
                Category
                <input value={item.category || ''} onChange={(event) => updateArrayItem('articles', index, 'category', event.target.value)} />
              </label>
              <label>
                Post title
                <input value={item.title || ''} onChange={(event) => updateArrayItem('articles', index, 'title', event.target.value)} />
              </label>
              <label>
                Summary
                <textarea rows="3" value={item.description || ''} onChange={(event) => updateArrayItem('articles', index, 'description', event.target.value)} />
              </label>
              <label>
                Image URL
                <input value={item.image || ''} onChange={(event) => updateArrayItem('articles', index, 'image', event.target.value)} />
              </label>
            </div>
          ))}
        </section>

        <section className="content-editor__group">
          <h3>About Page</h3>
          {(draft.education || []).map((item, index) => (
            <div key={`${item.title}-${index}`} className="content-editor__card">
              <label>
                Education title
                <input value={item.title || ''} onChange={(event) => updateArrayItem('education', index, 'title', event.target.value)} />
              </label>
              <label>
                Institution
                <input value={item.institution || ''} onChange={(event) => updateArrayItem('education', index, 'institution', event.target.value)} />
              </label>
              <label>
                Notes, comma separated
                <textarea rows="2" value={(item.notes || []).join(', ')} onChange={(event) => updateListItem('education', index, 'notes', event.target.value)} />
              </label>
            </div>
          ))}

          {(draft.skills || []).map((item, index) => (
            <div key={`${item.title}-${index}`} className="content-editor__card">
              <label>
                Skill title
                <input value={item.title || ''} onChange={(event) => updateArrayItem('skills', index, 'title', event.target.value)} />
              </label>
              <label>
                Accent label
                <input value={item.accent || ''} onChange={(event) => updateArrayItem('skills', index, 'accent', event.target.value)} />
              </label>
              <label>
                Description
                <textarea rows="2" value={item.description || ''} onChange={(event) => updateArrayItem('skills', index, 'description', event.target.value)} />
              </label>
              <label>
                Chips, comma separated
                <textarea rows="2" value={(item.chips || []).join(', ')} onChange={(event) => updateListItem('skills', index, 'chips', event.target.value)} />
              </label>
            </div>
          ))}

          {(draft.certifications || []).map((item, index) => (
            <div key={`${item.title}-${index}`} className="content-editor__card">
              <label>
                Certification title
                <input value={item.title || ''} onChange={(event) => updateArrayItem('certifications', index, 'title', event.target.value)} />
              </label>
              <label>
                Image URL
                <input value={item.image || ''} onChange={(event) => updateArrayItem('certifications', index, 'image', event.target.value)} />
              </label>
            </div>
          ))}
        </section>

        <button type="submit" className="primary-button" disabled={saving}>
          {saving ? 'Saving...' : 'Save changes'}
        </button>
      </form>
    </section>
  );
}

export default ContentEditor;
