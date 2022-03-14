// minify WerBeo response to needs and add occurrence statistics
// DON'T pass on sensitive information like exact coordinates or data about people
export function convertToOccurrenceData(occurrenceResponse) {
  let taxa = {};
  let occurrences = {};

  // iterate through occurrences
  occurrenceResponse.forEach((occurrence) => {
    let referenceID = occurrence.taxon.externalKey;

    occurrences[occurrence.id] = {
      taxonID: referenceID,
      date: occurrence.sample.date,
    };

    // populate taxa
    if (Object.prototype.hasOwnProperty.call(taxa, referenceID)) {
      // push occurrenceID to existing taxon object
      taxa[referenceID].occurrenceIDs.push(occurrence.id);
    } else {
      // push new taxon object
      taxa[referenceID] = {
        werbeoId: occurrence.taxon.id,
        name: occurrence.taxon.name,
        occurrenceIDs: [occurrence.id],
      };
    }
  });

  return { taxa, occurrences };
}
