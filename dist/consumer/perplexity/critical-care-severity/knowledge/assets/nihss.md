# NIH Stroke Scale (NIHSS)

## Purpose
Quantify neurologic deficit severity in acute stroke.

## Intended Population
Adults with suspected or confirmed acute stroke.

## Inputs
The NIHSS includes 15 scored items (1a to 11, with limb items split into left and right). Each item has defined scoring anchors.

### 1a. Level of Consciousness (LOC)
- 0: Alert
- 1: Not alert, but arousable by minor stimulation
- 2: Not alert, requires repeated or painful stimulation
- 3: Responds only with reflex motor or autonomic effects or totally unresponsive

### 1b. LOC Questions (month, age)
- 0: Answers both correctly
- 1: Answers one correctly
- 2: Answers neither correctly

### 1c. LOC Commands (open/close eyes; grip/release)
- 0: Performs both correctly
- 1: Performs one correctly
- 2: Performs neither correctly

### 2. Best Gaze
- 0: Normal
- 1: Partial gaze palsy
- 2: Forced deviation or total gaze paresis not overcome by oculocephalic maneuver

### 3. Visual Fields
- 0: No visual loss
- 1: Partial hemianopia
- 2: Complete hemianopia
- 3: Bilateral hemianopia (blind including cortical blindness)

### 4. Facial Palsy
- 0: Normal symmetric movement
- 1: Minor paralysis (flattened nasolabial fold, asymmetry on smile)
- 2: Partial paralysis (lower face)
- 3: Complete paralysis of one or both sides

### 5a. Motor Arm (Left) and 5b. Motor Arm (Right)
- 0: No drift (holds 90 deg for 10 sec)
- 1: Drift (does not hit bed)
- 2: Some effort against gravity
- 3: No effort against gravity
- 4: No movement
- UN: Amputation or joint fusion (explain)

### 6a. Motor Leg (Left) and 6b. Motor Leg (Right)
- 0: No drift (holds 30 deg for 5 sec)
- 1: Drift (does not hit bed)
- 2: Some effort against gravity
- 3: No effort against gravity
- 4: No movement
- UN: Amputation or joint fusion (explain)

### 7. Limb Ataxia
- 0: Absent
- 1: Present in one limb
- 2: Present in two limbs
- UN: Amputation or joint fusion (explain)

### 8. Sensory
- 0: Normal
- 1: Mild to moderate sensory loss
- 2: Severe to total sensory loss

### 9. Best Language
- 0: No aphasia
- 1: Mild to moderate aphasia
- 2: Severe aphasia
- 3: Mute, global aphasia

### 10. Dysarthria
- 0: Normal
- 1: Mild to moderate dysarthria
- 2: Severe dysarthria
- UN: Intubated or other physical barrier

### 11. Extinction and Inattention (Neglect)
- 0: No abnormality
- 1: Visual, tactile, auditory, spatial, or personal inattention
- 2: Profound hemi-inattention or extinction to more than one modality

## Algorithm
Sum the scores for all applicable items. Total range: 0 to 42.

## Output
NIHSS total score.

## Interpretation
Higher scores indicate more severe neurologic deficit. Use local stroke protocols and treatment thresholds.

## Limitations
- Requires training and standardized administration.
- Not a substitute for clinical judgment or imaging.

## Example
LOC 0, questions 1, commands 0, gaze 0, visual 0, facial 1, left arm 1, right arm 0, left leg 1, right leg 0, ataxia 0, sensory 1, language 1, dysarthria 0, neglect 0:
- Total = 6

## References
See: [references/critical-care-sources.md](../references/critical-care-sources.md)
