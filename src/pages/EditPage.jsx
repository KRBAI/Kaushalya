import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useContent } from '../contexts/ContentContext';
import { readFilesAsDataUrls } from '../lib/imageFiles';

const emptyProjectDraft = {
  label: '',
  title: '',
  description: '',
  tone: 'blue',
  images: [],
};

const emptyArticleDraft = {
  category: '',
  title: '',
  description: '',
  tone: 'blue',
  images: [],
};

const emptySkillDraft = {
  title: '',
  accent: '',
  description: '',
  chips: '',
  icon: 'fa-solid fa-star',
  size: 'small',
};

const emptyCertificationDraft = {
  title: '',
  image: '',
};

function MultiImageDropzone({ label, hint, images, onChange }) {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  const addFiles = async (files) => {
    const nextImages = await readFilesAsDataUrls(files);
    if (!nextImages.length) return;
    onChange([...(images || []), ...nextImages]);
  };

  const handleInputChange = async (event) => {
    await addFiles(event.target.files);
    event.target.value = '';
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    setDragging(false);
    await addFiles(event.dataTransfer.files);
  };

  return (
    <div className="media-dropzone-wrap">
      <div className="media-dropzone__label-row">
        <span>{label}</span>
        <button type="button" className="text-button" onClick={() => inputRef.current?.click()}>
          Browse files
        </button>
      </div>

      <div
        className={`media-dropzone ${dragging ? 'is-dragging' : ''}`}
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
      >
        <input ref={inputRef} type="file" accept="image/*" multiple hidden onChange={handleInputChange} />
        {images?.length ? (
          <div className="media-dropzone__previews">
            {images.map((image, index) => (
              <div key={`${label}-${index}-${image.slice(0, 16)}`} className="media-dropzone__preview">
                <img src={image} alt={`${label} ${index + 1}`} />
                <button
                  type="button"
                  className="media-dropzone__remove"
                  onClick={(event) => {
                    event.stopPropagation();
                    onChange(images.filter((_, itemIndex) => itemIndex !== index));
                  }}
                  aria-label={`Remove image ${index + 1}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="media-dropzone__empty">
            <strong>Drop images here</strong>
            <p>{hint}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function SingleImageDropzone({ label, hint, image, onChange }) {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  const addFile = async (file) => {
    const [nextImage] = await readFilesAsDataUrls([file]);
    if (nextImage) {
      onChange(nextImage);
    }
  };

  const handleInputChange = async (event) => {
    await addFile(event.target.files?.[0]);
    event.target.value = '';
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    setDragging(false);
    await addFile(event.dataTransfer.files?.[0]);
  };

  return (
    <div className="media-dropzone-wrap">
      <div className="media-dropzone__label-row">
        <span>{label}</span>
        <button type="button" className="text-button" onClick={() => inputRef.current?.click()}>
          Browse file
        </button>
      </div>

      <div
        className={`media-dropzone ${dragging ? 'is-dragging' : ''}`}
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
      >
        <input ref={inputRef} type="file" accept="image/*" hidden onChange={handleInputChange} />
        {image ? (
          <div className="media-dropzone__single-preview">
            <img src={image} alt={label} />
            <button
              type="button"
              className="media-dropzone__remove"
              onClick={(event) => {
                event.stopPropagation();
                onChange('');
              }}
              aria-label="Remove image"
            >
              ×
            </button>
          </div>
        ) : (
          <div className="media-dropzone__empty">
            <strong>Drop an image here</strong>
            <p>{hint}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function EditPage() {
  const { content, saveContent } = useContent();
  const { isAdmin, loading, googleAccessToken, signInWithGoogle } = useAuth();
  const [draft, setDraft] = useState(content);
  const draftRef = useRef(content);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState('');

  const [projectDraft, setProjectDraft] = useState(emptyProjectDraft);
  const [articleDraft, setArticleDraft] = useState(emptyArticleDraft);
  const [skillDraft, setSkillDraft] = useState(emptySkillDraft);
  const [certificationDraft, setCertificationDraft] = useState(emptyCertificationDraft);

  useEffect(() => {
    draftRef.current = content;
    setDraft(content);
  }, [content]);

  const commitDraft = (nextDraftOrUpdater) => {
    setDraft((current) => {
      const nextDraft = typeof nextDraftOrUpdater === 'function' ? nextDraftOrUpdater(current) : nextDraftOrUpdater;
      draftRef.current = nextDraft;
      return nextDraft;
    });
  };

  if (loading) {
    return (
      <div className="page-stack">
        <section className="content-editor content-editor--page">
          <span className="eyebrow">Edit</span>
          <h2>Loading editor…</h2>
          <p className="content-editor__status">Checking your sign-in state and content data.</p>
        </section>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="page-stack">
        <section className="content-editor content-editor--page">
          <span className="eyebrow">Edit</span>
          <h2>Admin access required</h2>
          <p className="content-editor__status">Sign in with the admin account to edit this site.</p>
        </section>
      </div>
    );
  }

  const updateSiteField = (field, value) => {
    commitDraft((current) => ({
      ...current,
      site: {
        ...(current.site || {}),
        [field]: value,
      },
    }));
  };

  const updateSiteContact = (field, value) => {
    commitDraft((current) => ({
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
    commitDraft((current) => {
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
    commitDraft((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const updateHeroImage = (image) => {
    commitDraft((current) => ({
      ...current,
      hero: {
        ...(current.hero || {}),
        image,
      },
    }));
  };

  const updateAboutImage = (image) => {
    commitDraft((current) => ({
      ...current,
      aboutImage: image,
    }));
  };

  const updateArrayItem = (section, index, field, value) => {
    commitDraft((current) => {
      const items = [...(current[section] || [])];
      items[index] = { ...items[index], [field]: value };
      return { ...current, [section]: items };
    });
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

  const addFeaturedProject = () => {
    if (!projectDraft.title.trim()) {
      setStatus('Please enter a project title before adding.');
      return;
    }

    const nextProject = {
      id: `project-${Date.now()}`,
      label: projectDraft.label.trim() || 'Featured Engineering',
      title: projectDraft.title.trim(),
      description: projectDraft.description.trim(),
      tone: projectDraft.tone || 'blue',
      image: projectDraft.images[0] || '',
      images: projectDraft.images,
    };

    const baseDraft = draftRef.current || draft;
    const nextDraft = {
      ...baseDraft,
      featuredProjects: [...(baseDraft.featuredProjects || []), nextProject],
    };

    commitDraft(nextDraft);
    setProjectDraft({ ...emptyProjectDraft, images: [] });

    setSaving(true);
    setStatus('Saving added project...');

    saveContent(nextDraft, { googleAccessToken })
      .then(() => {
        setStatus('Added and saved the featured engineering project.');
      })
      .catch((saveError) => {
        setStatus(saveError?.message || 'Project added to draft, but save failed. Click Save changes to retry.');
      })
      .finally(() => {
        setSaving(false);
      });
  };

  const addBlogArticle = () => {
    if (!articleDraft.title.trim()) {
      setStatus('Please enter an article title before adding.');
      return;
    }

    const nextArticle = {
      id: `article-${Date.now()}`,
      category: articleDraft.category.trim() || 'Blog',
      title: articleDraft.title.trim(),
      description: articleDraft.description.trim(),
      tone: articleDraft.tone || 'blue',
      image: articleDraft.images[0] || '',
      images: articleDraft.images,
      commentsEnabled: true,
    };

    const baseDraft = draftRef.current || draft;
    const nextDraft = {
      ...baseDraft,
      articles: [...(baseDraft.articles || []), nextArticle],
    };

    commitDraft(nextDraft);
    setArticleDraft({ ...emptyArticleDraft, images: [] });

    setSaving(true);
    setStatus('Saving added article...');

    saveContent(nextDraft, { googleAccessToken })
      .then(() => {
        setStatus('Added and saved the blog article.');
      })
      .catch((saveError) => {
        setStatus(saveError?.message || 'Article added to draft, but save failed. Click Save changes to retry.');
      })
      .finally(() => {
        setSaving(false);
      });
  };

  const addSkill = () => {
    if (!skillDraft.title.trim()) {
      setStatus('Please enter a skill title before adding.');
      return;
    }

    const nextSkill = {
      title: skillDraft.title.trim(),
      accent: skillDraft.accent.trim(),
      description: skillDraft.description.trim(),
      chips: skillDraft.chips
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean),
      icon: skillDraft.icon.trim() || 'fa-solid fa-star',
      size: skillDraft.size || 'small',
    };

    const baseDraft = draftRef.current || draft;
    const nextDraft = {
      ...baseDraft,
      skills: [...(baseDraft.skills || []), nextSkill],
    };

    commitDraft(nextDraft);
    setSkillDraft({ ...emptySkillDraft });

    setSaving(true);
    setStatus('Saving added skill...');

    saveContent(nextDraft, { googleAccessToken })
      .then(() => {
        setStatus('Added and saved the skill.');
      })
      .catch((saveError) => {
        setStatus(saveError?.message || 'Skill added to draft, but save failed. Click Save changes to retry.');
      })
      .finally(() => {
        setSaving(false);
      });
  };

  const addCertification = () => {
    if (!certificationDraft.title.trim()) {
      setStatus('Please enter a certification title before adding.');
      return;
    }

    const nextCertification = {
      title: certificationDraft.title.trim(),
      image: certificationDraft.image.trim(),
    };

    const baseDraft = draftRef.current || draft;
    const nextDraft = {
      ...baseDraft,
      certifications: [...(baseDraft.certifications || []), nextCertification],
    };

    commitDraft(nextDraft);
    setCertificationDraft({ ...emptyCertificationDraft });

    setSaving(true);
    setStatus('Saving added certification...');

    saveContent(nextDraft, { googleAccessToken })
      .then(() => {
        setStatus('Added and saved the certification.');
      })
      .catch((saveError) => {
        setStatus(saveError?.message || 'Certification added to draft, but save failed. Click Save changes to retry.');
      })
      .finally(() => {
        setSaving(false);
      });
  };

  const reconnectDrive = async () => {
    setStatus('Refreshing Google Drive access...');

    try {
      await signInWithGoogle();
      setStatus('Google Drive access connected.');
    } catch (error) {
      setStatus(error?.message || 'Could not connect Google Drive access.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setStatus('');

    try {
      await saveContent(draftRef.current || draft, { googleAccessToken });
      setStatus('Saved to Firestore.');
    } catch (saveError) {
      setStatus(saveError?.message || 'Save failed. Check Firestore rules and permissions.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="page-stack">
      <section className="content-editor content-editor--page">
        <div className="content-editor__header">
          <div>
            <span className="eyebrow">Edit</span>
            <h2>Edit Website Content</h2>
          </div>
          <button type="button" onClick={() => commitDraft(content)} className="secondary-button">
            Reset draft
          </button>
        </div>

        {status ? <p className="content-editor__status">{status}</p> : null}

        {isAdmin && !googleAccessToken ? (
          <div className="content-editor__status content-editor__status--warning">
            <span>Google Drive is not connected. Image uploads will not save until you reconnect.</span>
            <button type="button" className="text-button" onClick={reconnectDrive}>
              Connect Google Drive
            </button>
          </div>
        ) : null}

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

              <SingleImageDropzone
                label="Home hero image"
                hint="Drag in a new hero image for the home section."
                image={draft.hero?.image || ''}
                onChange={updateHeroImage}
              />

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
              </div>
            </section>

            <section className="content-editor__group">
              <h3>About Page</h3>
              <div className="content-editor__grid">
                <label>
                  About eyebrow
                  <input
                    value={draft.about?.eyebrow || ''}
                    onChange={(event) => updateTopLevelField('about', { ...(draft.about || {}), eyebrow: event.target.value })}
                    placeholder="About me"
                  />
                </label>
                <label>
                  About title
                  <input
                    value={draft.about?.title || ''}
                    onChange={(event) => updateTopLevelField('about', { ...(draft.about || {}), title: event.target.value })}
                    placeholder="About Kaushalya"
                  />
                </label>
                <label>
                  About description
                  <textarea
                    rows="3"
                    value={draft.about?.description || ''}
                    onChange={(event) => updateTopLevelField('about', { ...(draft.about || {}), description: event.target.value })}
                    placeholder="Write your About section intro"
                  />
                </label>
              </div>

              <SingleImageDropzone
                label="About section image"
                hint="Drag in the image shown beside the About introduction."
                image={draft.aboutImage || ''}
                onChange={updateAboutImage}
              />

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
            </section>

            <section className="content-editor__group">
              <h3>Add Content</h3>
              <div className="edit-create-grid">
                <article className="edit-create-card">
                  <div className="edit-create-card__head">
                    <div>
                      <span className="eyebrow">Home</span>
                      <h4>Featured Engineering Projects</h4>
                    </div>
                    <span className="edit-create-card__count">{draft.featuredProjects?.length || 0} saved</span>
                  </div>

                  <label>
                    Project label
                    <input
                      value={projectDraft.label}
                      onChange={(event) => setProjectDraft((current) => ({ ...current, label: event.target.value }))}
                      placeholder="Robotics & IoT"
                    />
                  </label>
                  <label>
                    Project title
                    <input
                      value={projectDraft.title}
                      onChange={(event) => setProjectDraft((current) => ({ ...current, title: event.target.value }))}
                      placeholder="Arduino Self Driving Car"
                    />
                  </label>
                  <label>
                    Project description
                    <textarea
                      rows="3"
                      value={projectDraft.description}
                      onChange={(event) => setProjectDraft((current) => ({ ...current, description: event.target.value }))}
                      placeholder="Describe the project"
                    />
                  </label>
                  <label>
                    Color tone
                    <select value={projectDraft.tone} onChange={(event) => setProjectDraft((current) => ({ ...current, tone: event.target.value }))}>
                      <option value="blue">Blue</option>
                      <option value="amber">Amber</option>
                      <option value="violet">Violet</option>
                    </select>
                  </label>

                  <MultiImageDropzone
                    label="Project images"
                    hint="Drag multiple images here. They will swipe in the home card."
                    images={projectDraft.images}
                    onChange={(images) => setProjectDraft((current) => ({ ...current, images }))}
                  />

                  <button type="button" className="primary-button" onClick={addFeaturedProject} disabled={!projectDraft.title.trim()}>
                    Add project
                  </button>
                </article>

                <article className="edit-create-card">
                  <div className="edit-create-card__head">
                    <div>
                      <span className="eyebrow">Blog</span>
                      <h4>Blog & Articles</h4>
                    </div>
                    <span className="edit-create-card__count">{draft.articles?.length || 0} saved</span>
                  </div>

                  <label>
                    Category
                    <input
                      value={articleDraft.category}
                      onChange={(event) => setArticleDraft((current) => ({ ...current, category: event.target.value }))}
                      placeholder="Robotics"
                    />
                  </label>
                  <label>
                    Article title
                    <input
                      value={articleDraft.title}
                      onChange={(event) => setArticleDraft((current) => ({ ...current, title: event.target.value }))}
                      placeholder="Rise of the Machines"
                    />
                  </label>
                  <label>
                    Article description
                    <textarea
                      rows="3"
                      value={articleDraft.description}
                      onChange={(event) => setArticleDraft((current) => ({ ...current, description: event.target.value }))}
                      placeholder="Write the article summary"
                    />
                  </label>
                  <label>
                    Color tone
                    <select value={articleDraft.tone} onChange={(event) => setArticleDraft((current) => ({ ...current, tone: event.target.value }))}>
                      <option value="blue">Blue</option>
                      <option value="amber">Amber</option>
                      <option value="violet">Violet</option>
                    </select>
                  </label>

                  <MultiImageDropzone
                    label="Article images"
                    hint="Drag multiple images here. Readers can swipe through them in the blog card."
                    images={articleDraft.images}
                    onChange={(images) => setArticleDraft((current) => ({ ...current, images }))}
                  />

                  <button type="button" className="primary-button" onClick={addBlogArticle} disabled={!articleDraft.title.trim()}>
                    Add article
                  </button>
                </article>

                <article className="edit-create-card">
                  <div className="edit-create-card__head">
                    <div>
                      <span className="eyebrow">About</span>
                      <h4>Skills</h4>
                    </div>
                    <span className="edit-create-card__count">{draft.skills?.length || 0} saved</span>
                  </div>

                  <label>
                    Skill title
                    <input
                      value={skillDraft.title}
                      onChange={(event) => setSkillDraft((current) => ({ ...current, title: event.target.value }))}
                      placeholder="Embedded Systems & IoT"
                    />
                  </label>
                  <label>
                    Accent label
                    <input
                      value={skillDraft.accent}
                      onChange={(event) => setSkillDraft((current) => ({ ...current, accent: event.target.value }))}
                      placeholder="Hardware Layers"
                    />
                  </label>
                  <label>
                    Description
                    <textarea
                      rows="3"
                      value={skillDraft.description}
                      onChange={(event) => setSkillDraft((current) => ({ ...current, description: event.target.value }))}
                      placeholder="Describe the skill"
                    />
                  </label>
                  <label>
                    Chips, comma separated
                    <input
                      value={skillDraft.chips}
                      onChange={(event) => setSkillDraft((current) => ({ ...current, chips: event.target.value }))}
                      placeholder="Arduino, Firmware, Sensors"
                    />
                  </label>
                  <div className="content-editor__grid content-editor__grid--two">
                    <label>
                      Icon class
                      <input
                        value={skillDraft.icon}
                        onChange={(event) => setSkillDraft((current) => ({ ...current, icon: event.target.value }))}
                        placeholder="fa-solid fa-microchip"
                      />
                    </label>
                    <label>
                      Card size
                      <select value={skillDraft.size} onChange={(event) => setSkillDraft((current) => ({ ...current, size: event.target.value }))}>
                        <option value="small">Small</option>
                        <option value="large">Large</option>
                        <option value="wide">Wide</option>
                      </select>
                    </label>
                  </div>

                  <button type="button" className="primary-button" onClick={addSkill} disabled={!skillDraft.title.trim()}>
                    Add skill
                  </button>
                </article>

                <article className="edit-create-card">
                  <div className="edit-create-card__head">
                    <div>
                      <span className="eyebrow">About</span>
                      <h4>Certifications</h4>
                    </div>
                    <span className="edit-create-card__count">{draft.certifications?.length || 0} saved</span>
                  </div>

                  <label>
                    Certification title
                    <input
                      value={certificationDraft.title}
                      onChange={(event) => setCertificationDraft((current) => ({ ...current, title: event.target.value }))}
                      placeholder="Web Design for Beginners"
                    />
                  </label>

                  <SingleImageDropzone
                    label="Certification image"
                    hint="Drop one image here or click to browse."
                    image={certificationDraft.image}
                    onChange={(image) => setCertificationDraft((current) => ({ ...current, image }))}
                  />

                  <button type="button" className="primary-button" onClick={addCertification} disabled={!certificationDraft.title.trim()}>
                    Add certification
                  </button>
                </article>
              </div>
            </section>

          <button type="submit" className="primary-button" disabled={saving}>
            {saving ? 'Saving...' : 'Save changes'}
          </button>
        </form>
      </section>
    </div>
  );
}

export default EditPage;